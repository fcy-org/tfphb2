const consultoras = [
  { nome: "Rafaela", whatsapp: "5586953276646" },
  { nome: "Nicaele", whatsapp: "5586942228978" },
];

export const getConsultoraDodia = () => {
  const dia = new Date().getDate();
  return consultoras[dia % 2];
};

export const getWhatsappLink = (mensagem?: string) => {
  const consultora = getConsultoraDodia();
  const texto = mensagem
    ? encodeURIComponent(mensagem)
    : encodeURIComponent("Olá! Vi o site da Track&Field Parnaíba e quero saber mais sobre os lançamentos.");
  return `https://wa.me/${consultora.whatsapp}?text=${texto}`;
};
