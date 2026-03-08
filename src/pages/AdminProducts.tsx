import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Trash2, Edit2, Upload, X, Save, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CATEGORIES = ["Linhas & Fios", "Crochê", "Aviamentos", "Rendas & Elásticos", "Tecidos", "Embalagens"];

type Product = {
  id: string;
  name: string;
  category: string;
  image_url: string | null;
  whatsapp_msg: string | null;
  active: boolean;
  sort_order: number;
};

const AdminProducts = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", category: CATEGORIES[0], whatsapp_msg: "", active: true, sort_order: 0 });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [filterCategory, setFilterCategory] = useState("Todos");

  // Fetch ALL products (including inactive) for admin
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["admin-products"],
    queryFn: async () => {
      // Use rpc or direct query without RLS filter
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as Product[];
    },
  });

  const uploadImage = async (file: File, productId: string) => {
    const ext = file.name.split(".").pop();
    const path = `${productId}.${ext}`;
    const { error } = await supabase.storage.from("product-images").upload(path, file, { upsert: true });
    if (error) throw error;
    const { data: urlData } = supabase.storage.from("product-images").getPublicUrl(path);
    return urlData.publicUrl;
  };

  const saveMutation = useMutation({
    mutationFn: async (data: { id?: string; name: string; category: string; whatsapp_msg: string; active: boolean; sort_order: number }) => {
      let imageUrl: string | undefined;
      
      if (imageFile) {
        const tempId = data.id || crypto.randomUUID();
        imageUrl = await uploadImage(imageFile, tempId);
      }

      if (data.id) {
        const updateData: any = { name: data.name, category: data.category, whatsapp_msg: data.whatsapp_msg, active: data.active, sort_order: data.sort_order };
        if (imageUrl) updateData.image_url = imageUrl;
        const { error } = await supabase.from("products").update(updateData).eq("id", data.id);
        if (error) throw error;
      } else {
        const insertData: any = { name: data.name, category: data.category, whatsapp_msg: data.whatsapp_msg, active: data.active, sort_order: data.sort_order };
        if (imageUrl) insertData.image_url = imageUrl;
        const { error } = await supabase.from("products").insert(insertData);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success(editingId ? "Produto atualizado!" : "Produto adicionado!");
      resetForm();
    },
    onError: (err: any) => toast.error(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Produto removido!");
    },
  });

  const toggleActiveMutation = useMutation({
    mutationFn: async ({ id, active }: { id: string; active: boolean }) => {
      const { error } = await supabase.from("products").update({ active }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const resetForm = () => {
    setForm({ name: "", category: CATEGORIES[0], whatsapp_msg: "", active: true, sort_order: 0 });
    setImageFile(null);
    setEditingId(null);
    setShowForm(false);
  };

  const startEdit = (p: Product) => {
    setForm({ name: p.name, category: p.category, whatsapp_msg: p.whatsapp_msg || "", active: p.active, sort_order: p.sort_order });
    setEditingId(p.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = form.whatsapp_msg || `Oii Andreza! 😊 Vi o *${form.name}* no site! Tem disponível?`;
    saveMutation.mutate({ id: editingId || undefined, ...form, whatsapp_msg: msg });
  };

  const filtered = filterCategory === "Todos" ? products : products.filter(p => p.category === filterCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-heading text-xl font-bold">Painel Admin — Produtos</h1>
          <div className="flex gap-3">
            <button onClick={() => navigate("/")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Voltar ao site
            </button>
            <button
              onClick={() => { resetForm(); setShowForm(true); }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors"
            >
              <Plus size={16} /> Novo Produto
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Form */}
        {showForm && (
          <div className="mb-8 bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-lg font-bold">{editingId ? "Editar Produto" : "Novo Produto"}</h2>
              <button onClick={resetForm} className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Nome *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Categoria *</label>
                  <select
                    value={form.category}
                    onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Imagem do produto</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 bg-muted px-4 py-2.5 rounded-lg text-sm cursor-pointer hover:bg-muted/80 transition-colors">
                    <Upload size={16} />
                    {imageFile ? imageFile.name : "Escolher imagem"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => setImageFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  {imageFile && (
                    <button type="button" onClick={() => setImageFile(null)} className="text-xs text-destructive">Remover</button>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Mensagem WhatsApp (auto-gerada se vazio)</label>
                <textarea
                  value={form.whatsapp_msg}
                  onChange={e => setForm(f => ({ ...f, whatsapp_msg: e.target.value }))}
                  rows={2}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder={`Oii Andreza! 😊 Vi o *${form.name || "produto"}* no site! Tem disponível?`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Ordem</label>
                  <input
                    type="number"
                    value={form.sort_order}
                    onChange={e => setForm(f => ({ ...f, sort_order: parseInt(e.target.value) || 0 }))}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.active}
                      onChange={e => setForm(f => ({ ...f, active: e.target.checked }))}
                      className="w-4 h-4 accent-primary"
                    />
                    Produto ativo (visível no site)
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={saveMutation.isPending}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Save size={16} />
                {saveMutation.isPending ? "Salvando..." : editingId ? "Atualizar" : "Adicionar"}
              </button>
            </form>
          </div>
        )}

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["Todos", ...CATEGORIES].map(c => (
            <button
              key={c}
              onClick={() => setFilterCategory(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                filterCategory === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {c} {c !== "Todos" && `(${products.filter(p => p.category === c).length})`}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
          <span>Total: <strong className="text-foreground">{products.length}</strong></span>
          <span>Ativos: <strong className="text-foreground">{products.filter(p => p.active).length}</strong></span>
          <span>Com foto: <strong className="text-foreground">{products.filter(p => p.image_url).length}</strong></span>
        </div>

        {/* Products Table */}
        {isLoading ? (
          <div className="text-center py-16 text-muted-foreground text-sm">Carregando...</div>
        ) : (
          <div className="space-y-2">
            {filtered.map(p => (
              <div key={p.id} className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${p.active ? "bg-card border-border" : "bg-muted/30 border-border/50 opacity-60"}`}>
                <div className="w-14 h-14 rounded-lg bg-muted/50 flex-shrink-0 overflow-hidden flex items-center justify-center">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.name} className="w-full h-full object-contain p-1" />
                  ) : (
                    <span className="text-[10px] text-muted-foreground">Sem foto</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate">{p.name}</h3>
                  <p className="text-[10px] uppercase tracking-wider text-primary/60">{p.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleActiveMutation.mutate({ id: p.id, active: !p.active })}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    title={p.active ? "Desativar" : "Ativar"}
                  >
                    {p.active ? <Eye size={16} className="text-primary" /> : <EyeOff size={16} className="text-muted-foreground" />}
                  </button>
                  <button onClick={() => startEdit(p)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => { if (confirm("Remover este produto?")) deleteMutation.mutate(p.id); }}
                    className="p-2 rounded-lg hover:bg-destructive/10 text-destructive/60 hover:text-destructive transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminProducts;
