export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  whatsappMsg: string;
};

const DRIVE_FOLDER = "https://drive.google.com/thumbnail?sz=w400&id=";

// Helper to build Drive thumbnail URL from file ID
// Since we don't have file IDs, we'll use the direct export format
const driveImg = (filename: string) =>
  `https://drive.google.com/uc?export=view&id=PLACEHOLDER_${encodeURIComponent(filename)}`;

// For now, we use placeholder images. Replace with real URLs later via admin panel.
const placeholder = "/placeholder.svg";

export const products: Product[] = [
  // === LINHAS & FIOS ===
  { id: "anne-65m", name: "Anne 65m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi no site o *Anne 65m* e gostaria de saber as cores e preços disponíveis!" },
  { id: "anne-500m", name: "Anne 500m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Anne 500m*! Quais cores vocês têm disponíveis?" },
  { id: "anne-brilho-500m", name: "Anne Brilho 500m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Anne Brilho 500m* no site! Quero saber mais sobre as opções!" },
  { id: "anne-multicor-500m", name: "Anne Multicor 500m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Estou interessada no *Anne Multicor 500m*! Quais opções vocês têm?" },
  { id: "clea-125m", name: "Cléa 125m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Gostaria de saber sobre o *Cléa 125m*! Quais cores estão disponíveis?" },
  { id: "clea-500m", name: "Cléa 500m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Cléa 500m* no site! Quais cores e preços vocês têm?" },
  { id: "clea-1000m", name: "Cléa 1000m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Cléa 1000m*! Me conta mais sobre as opções?" },
  { id: "clea-multicor-1000m", name: "Cléa Multicor 1000m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Cléa Multicor 1000m* e adorei! Tem disponível?" },
  { id: "amigurumi", name: "Amigurumi", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o fio *Amigurumi* no site! Quais cores vocês têm?" },
  { id: "cairel-4000m", name: "Cairel Linhabras 4000m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso do *Cairel Linhabras 4000m*! Quais cores estão disponíveis?" },
  { id: "cairel-neon-4000m", name: "Cairel Neon Bonfio 4000m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Cairel Neon 4000m* no site! Tem disponível?" },
  { id: "barbante-stilo-n6", name: "Barbante Stilo N6 512m", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Gostei do *Barbante Stilo N6*! Quais cores vocês têm?" },
  { id: "barbante-supremo-big", name: "Barbante Supremo Big 6 1,8kg", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Quero saber sobre o *Barbante Supremo Big 6 1,8kg*! Tem disponível?" },
  { id: "barbante-supremo-4-600g", name: "Barbante Supremo Prediletto 4 600g", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Barbante Supremo Prediletto 4 600g*!" },
  { id: "barbante-supremo-6-1kg", name: "Barbante Supremo Prediletto 6 1kg", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Barbante Supremo Prediletto 6 1kg* no site! Quais cores têm?" },
  { id: "barroco-maxcolor-4", name: "Barroco Maxcolor 4 200g", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Quero saber sobre o *Barroco Maxcolor 4 200g*! Quais cores?" },
  { id: "barroco-maxcolor-6", name: "Barroco Maxcolor 6 400g", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Barroco Maxcolor 6 400g* e adorei! Tem disponível?" },
  { id: "barroco-natural-4-400g", name: "Barroco Natural 4 400g", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso do *Barroco Natural 4 400g*! Tem em estoque?" },
  { id: "barroco-natural-4-700g", name: "Barroco Natural 4 700g", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Barroco Natural 4 700g* no site! Preço e disponibilidade?" },
  { id: "barroco-natural-6-400g", name: "Barroco Natural 6 400g", category: "Linhas & Fios", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Quero o *Barroco Natural 6 400g*! Tem disponível?" },

  // === CROCHÊ ===
  { id: "agulha-croche-bambu", name: "Agulha Crochê Bambu", category: "Crochê", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Agulha de Crochê de Bambu* no site! Quais tamanhos vocês têm?" },
  { id: "agulha-croche-emborrachada", name: "Agulha Crochê Emborrachada", category: "Crochê", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse na *Agulha Crochê Emborrachada*! Quais tamanhos?" },
  { id: "agulha-croche-metal-tulip", name: "Agulha Crochê Metal Tulip", category: "Crochê", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Agulha Crochê Metal Tulip* no site! Quais opções vocês têm?" },
  { id: "agulha-croche-metal", name: "Agulha Crochê Metal", category: "Crochê", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Quero saber sobre a *Agulha Crochê Metal*! Quais tamanhos disponíveis?" },
  { id: "agulha-trico-plastico", name: "Agulha Tricô Plástico", category: "Crochê", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Agulha de Tricô Plástico* no site! Tem disponível?" },
  { id: "bastidor-bambu-tarraxa", name: "Bastidor Bambu com Tarraxa", category: "Crochê", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Bastidor Bambu com Tarraxa*! Quais tamanhos?" },
  { id: "bastidor-bambu-sem-tarraxa", name: "Bastidor Bambu sem Tarraxa", category: "Crochê", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Bastidor Bambu sem Tarraxa* no site! Quais tamanhos vocês têm?" },
  { id: "agulha-magica-bordar-la", name: "Agulha Mágica Bordar Lã", category: "Crochê", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Agulha Mágica Bordar Lã* no site e adorei! Tem disponível?" },

  // === AVIAMENTOS ===
  { id: "agulha-boneca", name: "Agulha Boneca", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Agulha Boneca*! Tem disponível?" },
  { id: "agulha-mao-darning", name: "Agulha de Mão Darning", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Agulha de Mão Darning* no site! Tem disponível?" },
  { id: "agulha-mao-tapestry", name: "Agulha de Mão Tapestry", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Agulha de Mão Tapestry*! Preço e disponibilidade?" },
  { id: "agulha-saco", name: "Agulha de Saco", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Agulha de Saco* no site! Tem disponível?" },
  { id: "agulha-pino-metal", name: "Agulha Pino Metal", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Agulha Pino Metal*! Quais opções vocês têm?" },
  { id: "agulha-dom-singer-8012-2020", name: "Agulha Dom Singer 80/12 #2020", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Agulha Dom Singer 80/12 #2020* no site! Tem disponível?" },
  { id: "agulha-dom-singer-9014-2020", name: "Agulha Dom Singer 90/14 #2020", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Agulha Dom Singer 90/14 #2020*! Tem em estoque?" },
  { id: "agulha-dom-singer-10016-2020", name: "Agulha Dom Singer 100/16 #2020", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Agulha Dom Singer 100/16 #2020*! Tem disponível?" },
  { id: "alfinete-bola", name: "Alfinete Bola", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Alfinete Bola* no site! Preço e disponibilidade?" },
  { id: "alfinete-cabeca-vidro", name: "Alfinete Cabeça de Vidro", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Alfinete Cabeça de Vidro*! Tem disponível?" },
  { id: "alfinete-costura-29mm", name: "Alfinete de Costura 29mm", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Alfinete de Costura 29mm*! Qual o preço?" },
  { id: "alfinete-disco", name: "Alfinete Disco", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso do *Alfinete Disco*! Tem em estoque?" },
  { id: "botao-pressao-magnetico", name: "Botão de Pressão Magnético", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Botão de Pressão Magnético* no site! Preço?" },
  { id: "botao-metal-flexivel", name: "Botão Metal Flexível", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Botão Metal Flexível*! Quais opções vocês têm?" },
  { id: "botao-scovill", name: "Botão Scóvill", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Botão Scóvill* no site! Tem disponível?" },
  { id: "broche-alfinete", name: "Broche Alfinete", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso do *Broche Alfinete*! Qual o preço?" },
  { id: "bobina-aluminio", name: "Bobina Alumínio", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Bobina Alumínio* no site! Tem disponível?" },
  { id: "bobina-metal", name: "Bobina Metal", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Bobina Metal*! Preço e disponibilidade?" },
  { id: "bobina-plastica", name: "Bobina Plástica", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Bobina Plástica* no site! Tem em estoque?" },
  { id: "bojo-liso-cortininha", name: "Bojo Liso Cortininha", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Bojo Liso Cortininha* no site! Quais tamanhos vocês têm?" },
  { id: "carretilha-costura", name: "Carretilha para Costura", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso de uma *Carretilha para Costura*! Tem disponível?" },
  { id: "alca-bolsa-mw-a30", name: "Alça de Bolsa MW-A30", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Alça de Bolsa MW-A30* no site! Quais cores disponíveis?" },
  { id: "alca-elastica", name: "Alça Elástica", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse na *Alça Elástica*! Preço?" },
  { id: "alca-metal-corrente", name: "Alça Metal Corrente 120cm", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Alça Metal Corrente 120cm* no site! Tem disponível?" },
  { id: "alca-silicone-transp", name: "Alça Silicone Transparente", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Alça Silicone Transparente*! Tem em estoque?" },
  { id: "argola-articulada-28mm", name: "Argola Articulada 28mm", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Argola Articulada 28mm*! Preço e disponibilidade?" },
  { id: "argola-biju", name: "Argola Biju", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Argola Biju*! Quais tamanhos vocês têm?" },
  { id: "argola-madeira", name: "Argola Madeira", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Argola Madeira* no site! Tem disponível?" },
  { id: "argola-plastico", name: "Argola Plástico", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse na *Argola Plástico*! Quais opções?" },
  { id: "argola-chaveiro-pingo", name: "Argola Chaveiro Pingo", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Argola Chaveiro Pingo*! Preço?" },
  { id: "bico-de-pato", name: "Bico de Pato", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Bico de Pato* no site! Tem disponível?" },
  { id: "abridor-de-casa", name: "Abridor de Casa", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Abridor de Casa* no site! Tem em estoque?" },
  { id: "bainha-instantanea", name: "Bainha Instantânea", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Bainha Instantânea* no site! Tem disponível?" },

  // === RENDAS & ELÁSTICOS ===
  { id: "bordado-ingles-5cm", name: "Bordado Inglês 5cm x 13,7m", category: "Rendas & Elásticos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Bordado Inglês 5cm* no site! Quais cores disponíveis?" },
  { id: "bordado-ingles-cor-5cm", name: "Bordado Inglês Cor 5cm x 13,7m", category: "Rendas & Elásticos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Bordado Inglês Cor 5cm*! Quais cores?" },
  { id: "bordado-ingles-7-5cm", name: "Bordado Inglês Liso 7,5cm x 13,7m", category: "Rendas & Elásticos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Bordado Inglês Liso 7,5cm*! Preço?" },
  { id: "bordado-ingles-matizado-5cm", name: "Bordado Inglês Matizado 5cm", category: "Rendas & Elásticos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Bordado Inglês Matizado 5cm*! Tem disponível?" },
  { id: "bordado-ingles-matizado-10cm", name: "Bordado Inglês Matizado 10cm", category: "Rendas & Elásticos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Bordado Inglês Matizado 10cm*! Preço?" },
  { id: "bordado-organza", name: "Bordado Organza 6,3cm", category: "Rendas & Elásticos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Bordado Organza 6,3cm* no site! Quais opções?" },
  { id: "cadarco-120m", name: "Cadarço 1,20m", category: "Rendas & Elásticos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso do *Cadarço 1,20m*! Quais cores vocês têm?" },
  { id: "cadarco-chato-120cm", name: "Cadarço Chato 120cm", category: "Rendas & Elásticos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Cadarço Chato 120cm*! Tem disponível?" },

  // === EMBALAGENS ===
  { id: "box-organizador", name: "Box Organizador Transparente", category: "Embalagens", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Box Organizador Transparente* no site! Tem disponível?" },
  { id: "bobina-termica-80mm", name: "Bobina Térmica 80mm", category: "Embalagens", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Bobina Térmica 80mm*! Preço?" },

  // === TECIDOS (itens diversos do catálogo) ===
  { id: "chaton-acrilico-colorido", name: "Chaton Acrílico Colorido", category: "Tecidos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Chaton Acrílico Colorido* no site! Quais opções vocês têm?" },
  { id: "chaton-acrilico-transparente", name: "Chaton Acrílico Transparente", category: "Tecidos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Tenho interesse no *Chaton Acrílico Transparente*! Preço?" },
  { id: "cola-quente-7mm", name: "Cola Quente Bastão 7mm", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Cola Quente Bastão 7mm*! Tem disponível?" },
  { id: "cola-quente-11mm", name: "Cola Quente Bastão 11mm", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Cola Quente Bastão 11mm* no site! Preço?" },
  { id: "cola-pano-15g", name: "Cola Pano 15g", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Cola Pano 15g*! Tem em estoque?" },
  { id: "cola-pano-50g", name: "Cola Pano 50g", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi a *Cola Pano 50g* no site! Preço?" },
  { id: "cola-silicone-50g", name: "Cola Silicone Líquida 50g", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Preciso da *Cola Silicone Líquida 50g*! Tem disponível?" },
  { id: "aplicador-pino-tag", name: "Aplicador Pino Tag", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Aplicador Pino Tag* no site! Preço?" },
  { id: "alicate-cuticula", name: "Alicate Cutícula Mundial 777", category: "Aviamentos", image: placeholder, whatsappMsg: "Oii Andreza! 😊 Vi o *Alicate Cutícula Mundial 777* no site! Tem disponível?" },
];

export const categories = ["Todos", "Linhas & Fios", "Crochê", "Aviamentos", "Rendas & Elásticos", "Tecidos", "Embalagens"];
