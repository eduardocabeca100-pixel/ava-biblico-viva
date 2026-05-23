import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Circle,
  CircleCheck,
  ClipboardCheck,
  Copy,
  Cross,
  FileText,
  Flame,
  Heart,
  Home,
  Library,
  MoreHorizontal,
  NotebookPen,
  Palette,
  PenLine,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Theater,
  Type,
  UserCircle,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const bibleBooks = [
  { nome: "Gênesis", testamento: "Antigo", capitulos: 50 },
  { nome: "Êxodo", testamento: "Antigo", capitulos: 40 },
  { nome: "Levítico", testamento: "Antigo", capitulos: 27 },
  { nome: "Números", testamento: "Antigo", capitulos: 36 },
  { nome: "Deuteronômio", testamento: "Antigo", capitulos: 34 },
  { nome: "Josué", testamento: "Antigo", capitulos: 24 },
  { nome: "Juízes", testamento: "Antigo", capitulos: 21 },
  { nome: "Rute", testamento: "Antigo", capitulos: 4 },
  { nome: "1 Samuel", testamento: "Antigo", capitulos: 31 },
  { nome: "2 Samuel", testamento: "Antigo", capitulos: 24 },
  { nome: "1 Reis", testamento: "Antigo", capitulos: 22 },
  { nome: "2 Reis", testamento: "Antigo", capitulos: 25 },
  { nome: "1 Crônicas", testamento: "Antigo", capitulos: 29 },
  { nome: "2 Crônicas", testamento: "Antigo", capitulos: 36 },
  { nome: "Esdras", testamento: "Antigo", capitulos: 10 },
  { nome: "Neemias", testamento: "Antigo", capitulos: 13 },
  { nome: "Ester", testamento: "Antigo", capitulos: 10 },
  { nome: "Jó", testamento: "Antigo", capitulos: 42 },
  { nome: "Salmos", testamento: "Antigo", capitulos: 150 },
  { nome: "Provérbios", testamento: "Antigo", capitulos: 31 },
  { nome: "Eclesiastes", testamento: "Antigo", capitulos: 12 },
  { nome: "Cantares", testamento: "Antigo", capitulos: 8 },
  { nome: "Isaías", testamento: "Antigo", capitulos: 66 },
  { nome: "Jeremias", testamento: "Antigo", capitulos: 52 },
  { nome: "Lamentações", testamento: "Antigo", capitulos: 5 },
  { nome: "Ezequiel", testamento: "Antigo", capitulos: 48 },
  { nome: "Daniel", testamento: "Antigo", capitulos: 12 },
  { nome: "Oseias", testamento: "Antigo", capitulos: 14 },
  { nome: "Joel", testamento: "Antigo", capitulos: 3 },
  { nome: "Amós", testamento: "Antigo", capitulos: 9 },
  { nome: "Obadias", testamento: "Antigo", capitulos: 1 },
  { nome: "Jonas", testamento: "Antigo", capitulos: 4 },
  { nome: "Miqueias", testamento: "Antigo", capitulos: 7 },
  { nome: "Naum", testamento: "Antigo", capitulos: 3 },
  { nome: "Habacuque", testamento: "Antigo", capitulos: 3 },
  { nome: "Sofonias", testamento: "Antigo", capitulos: 3 },
  { nome: "Ageu", testamento: "Antigo", capitulos: 2 },
  { nome: "Zacarias", testamento: "Antigo", capitulos: 14 },
  { nome: "Malaquias", testamento: "Antigo", capitulos: 4 },
  { nome: "Mateus", testamento: "Novo", capitulos: 28 },
  { nome: "Marcos", testamento: "Novo", capitulos: 16 },
  { nome: "Lucas", testamento: "Novo", capitulos: 24 },
  { nome: "João", testamento: "Novo", capitulos: 21 },
  { nome: "Atos", testamento: "Novo", capitulos: 28 },
  { nome: "Romanos", testamento: "Novo", capitulos: 16 },
  { nome: "1 Coríntios", testamento: "Novo", capitulos: 16 },
  { nome: "2 Coríntios", testamento: "Novo", capitulos: 13 },
  { nome: "Gálatas", testamento: "Novo", capitulos: 6 },
  { nome: "Efésios", testamento: "Novo", capitulos: 6 },
  { nome: "Filipenses", testamento: "Novo", capitulos: 4 },
  { nome: "Colossenses", testamento: "Novo", capitulos: 4 },
  { nome: "1 Tessalonicenses", testamento: "Novo", capitulos: 5 },
  { nome: "2 Tessalonicenses", testamento: "Novo", capitulos: 3 },
  { nome: "1 Timóteo", testamento: "Novo", capitulos: 6 },
  { nome: "2 Timóteo", testamento: "Novo", capitulos: 4 },
  { nome: "Tito", testamento: "Novo", capitulos: 3 },
  { nome: "Filemom", testamento: "Novo", capitulos: 1 },
  { nome: "Hebreus", testamento: "Novo", capitulos: 13 },
  { nome: "Tiago", testamento: "Novo", capitulos: 5 },
  { nome: "1 Pedro", testamento: "Novo", capitulos: 5 },
  { nome: "2 Pedro", testamento: "Novo", capitulos: 3 },
  { nome: "1 João", testamento: "Novo", capitulos: 5 },
  { nome: "2 João", testamento: "Novo", capitulos: 1 },
  { nome: "3 João", testamento: "Novo", capitulos: 1 },
  { nome: "Judas", testamento: "Novo", capitulos: 1 },
  { nome: "Apocalipse", testamento: "Novo", capitulos: 22 },
];

const sampleBibleText = {
  João: {
    1: {
      titulo: "O Verbo eterno",
      nota: "Texto demonstrativo. Na versão final, a Bíblia completa pode entrar em JSON autorizado para uso offline, com marcação redLetter para falas de Deus e de Jesus.",
      versos: [
        { n: 1, texto: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus." },
        { n: 4, texto: "Nele estava a vida, e a vida era a luz dos homens." },
        { n: 14, texto: "E o Verbo se fez carne e habitou entre nós, cheio de graça e verdade." },
        { n: 29, texto: "Eis o Cordeiro de Deus, que tira o pecado do mundo." },
      ],
    },
  },
  Gênesis: {
    1: {
      titulo: "A criação dos céus e da terra",
      nota: "Capítulo completo demonstrativo em texto livre. A estrutura já aceita Bíblia completa em JSON, com marcação redLetter para falas de Deus e de Jesus.",
      versos: [
        { n: 1, texto: "No princípio criou Deus os céus e a terra." },
        { n: 2, texto: "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas." },
        { n: 3, texto: "E disse Deus: Haja luz. E houve luz.", red: true, speaker: "Deus" },
        { n: 4, texto: "E viu Deus que era boa a luz; e fez Deus separação entre a luz e as trevas." },
        { n: 5, texto: "E Deus chamou à luz Dia; e às trevas chamou Noite. E foi a tarde e a manhã, o dia primeiro." },
        { n: 6, texto: "E disse Deus: Haja uma expansão no meio das águas, e haja separação entre águas e águas.", red: true, speaker: "Deus" },
        { n: 7, texto: "E fez Deus a expansão, e fez separação entre as águas que estavam debaixo da expansão e as águas que estavam sobre a expansão. E assim foi." },
        { n: 8, texto: "E chamou Deus à expansão Céus; e foi a tarde e a manhã, o dia segundo." },
        { n: 9, texto: "E disse Deus: Ajuntem-se as águas debaixo dos céus num lugar; e apareça a porção seca. E assim foi.", red: true, speaker: "Deus" },
        { n: 10, texto: "E chamou Deus à porção seca Terra; e ao ajuntamento das águas chamou Mares. E viu Deus que era bom." },
        { n: 11, texto: "E disse Deus: Produza a terra erva verde, erva que dê semente, árvore frutífera que dê fruto segundo a sua espécie, cuja semente esteja nela sobre a terra. E assim foi.", red: true, speaker: "Deus" },
        { n: 12, texto: "E a terra produziu erva, erva dando semente conforme a sua espécie, e árvore frutífera, cuja semente está nela conforme a sua espécie. E viu Deus que era bom." },
        { n: 13, texto: "E foi a tarde e a manhã, o dia terceiro." },
        { n: 14, texto: "E disse Deus: Haja luminares na expansão dos céus, para haver separação entre o dia e a noite; e sejam eles para sinais e para tempos determinados e para dias e anos.", red: true, speaker: "Deus" },
        { n: 15, texto: "E sejam para luminares na expansão dos céus, para alumiar a terra. E assim foi." },
        { n: 16, texto: "E fez Deus os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; e fez as estrelas." },
        { n: 17, texto: "E Deus os pôs na expansão dos céus para alumiar a terra." },
        { n: 18, texto: "E para governar o dia e a noite, e para fazer separação entre a luz e as trevas. E viu Deus que era bom." },
        { n: 19, texto: "E foi a tarde e a manhã, o dia quarto." },
        { n: 20, texto: "E disse Deus: Produzam as águas abundantemente répteis de alma vivente; e voem as aves sobre a face da expansão dos céus.", red: true, speaker: "Deus" },
        { n: 21, texto: "E Deus criou as grandes baleias, e todo réptil de alma vivente que as águas abundantemente produziram conforme as suas espécies, e toda ave de asas conforme a sua espécie. E viu Deus que era bom." },
        { n: 22, texto: "E Deus os abençoou, dizendo: Frutificai e multiplicai-vos, e enchei as águas nos mares; e as aves se multipliquem na terra.", red: true, speaker: "Deus" },
        { n: 23, texto: "E foi a tarde e a manhã, o dia quinto." },
        { n: 24, texto: "E disse Deus: Produza a terra alma vivente conforme a sua espécie; gado, répteis e feras da terra conforme a sua espécie. E assim foi.", red: true, speaker: "Deus" },
        { n: 25, texto: "E fez Deus as feras da terra conforme a sua espécie, e o gado conforme a sua espécie, e todo o réptil da terra conforme a sua espécie. E viu Deus que era bom." },
        { n: 26, texto: "E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo réptil que se move sobre a terra.", red: true, speaker: "Deus" },
        { n: 27, texto: "E criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou." },
        { n: 28, texto: "E Deus os abençoou, e Deus lhes disse: Frutificai e multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai sobre os peixes do mar, sobre as aves dos céus e sobre todo animal que se move sobre a terra.", red: true, speaker: "Deus" },
        { n: 29, texto: "E disse Deus: Eis que vos tenho dado toda erva que dá semente, que está sobre a face de toda a terra; e toda árvore em que há fruto de árvore que dá semente, ser-vos-á para mantimento.", red: true, speaker: "Deus" },
        { n: 30, texto: "E a todo animal da terra, e a toda ave dos céus, e a todo réptil da terra, em que há alma vivente, toda erva verde será para mantimento. E assim foi." },
        { n: 31, texto: "E viu Deus tudo quanto tinha feito, e eis que era muito bom. E foi a tarde e a manhã, o dia sexto." },
      ],
    },
    2: {
      titulo: "O descanso, o Éden e a criação da mulher",
      nota: "Capítulo completo demonstrativo para o plano cronológico.",
      versos: [
        { n: 1, texto: "Assim os céus, a terra e todo o seu exército foram acabados." },
        { n: 2, texto: "E havendo Deus acabado no dia sétimo a obra que fizera, descansou no sétimo dia de toda a sua obra que tinha feito." },
        { n: 3, texto: "E abençoou Deus o dia sétimo, e o santificou; porque nele descansou de toda a sua obra que Deus criara e fizera." },
        { n: 4, texto: "Estas são as origens dos céus e da terra, quando foram criados; no dia em que o Senhor Deus fez a terra e os céus." },
        { n: 5, texto: "E toda planta do campo que ainda não estava na terra, e toda erva do campo que ainda não brotava; porque ainda o Senhor Deus não tinha feito chover sobre a terra, e não havia homem para lavrar a terra." },
        { n: 6, texto: "Um vapor, porém, subia da terra, e regava toda a face da terra." },
        { n: 7, texto: "E formou o Senhor Deus o homem do pó da terra, e soprou em seus narizes o fôlego da vida; e o homem foi feito alma vivente." },
        { n: 8, texto: "E plantou o Senhor Deus um jardim no Éden, da banda do oriente; e pôs ali o homem que tinha formado." },
        { n: 9, texto: "E o Senhor Deus fez brotar da terra toda árvore agradável à vista e boa para comida; e a árvore da vida no meio do jardim, e a árvore da ciência do bem e do mal." },
        { n: 10, texto: "E saía um rio do Éden para regar o jardim; e dali se dividia e se tornava em quatro braços." },
        { n: 11, texto: "O nome do primeiro é Pisom; este é o que rodeia toda a terra de Havilá, onde há ouro." },
        { n: 12, texto: "E o ouro dessa terra é bom; ali há o bdélio e a pedra sardônica." },
        { n: 13, texto: "E o nome do segundo rio é Giom; este é o que rodeia toda a terra de Cuxe." },
        { n: 14, texto: "E o nome do terceiro rio é Tigre; este é o que vai para a banda do oriente da Assíria; e o quarto rio é o Eufrates." },
        { n: 15, texto: "E tomou o Senhor Deus o homem, e o pôs no jardim do Éden para o lavrar e o guardar." },
        { n: 16, texto: "E ordenou o Senhor Deus ao homem, dizendo: De toda árvore do jardim comerás livremente.", red: true, speaker: "Deus" },
        { n: 17, texto: "Mas da árvore da ciência do bem e do mal, dela não comerás; porque no dia em que dela comeres, certamente morrerás.", red: true, speaker: "Deus" },
        { n: 18, texto: "E disse o Senhor Deus: Não é bom que o homem esteja só; far-lhe-ei uma ajudadora idônea para ele.", red: true, speaker: "Deus" },
        { n: 19, texto: "Havendo, pois, o Senhor Deus formado da terra todo animal do campo e toda ave dos céus, os trouxe a Adão, para este ver como lhes chamaria; e tudo o que Adão chamou a toda alma vivente, isso foi o seu nome." },
        { n: 20, texto: "E Adão pôs os nomes a todo o gado, e às aves dos céus, e a todo animal do campo; mas para o homem não se achava ajudadora idônea." },
        { n: 21, texto: "Então o Senhor Deus fez cair um sono pesado sobre Adão, e este adormeceu; e tomou uma das suas costelas, e cerrou a carne em seu lugar." },
        { n: 22, texto: "E da costela que o Senhor Deus tomou do homem, formou uma mulher, e trouxe-a a Adão." },
        { n: 23, texto: "E disse Adão: Esta é agora osso dos meus ossos e carne da minha carne; esta será chamada mulher, porquanto do homem foi tomada." },
        { n: 24, texto: "Portanto deixará o homem o seu pai e a sua mãe, e apegar-se-á à sua mulher, e serão ambos uma carne." },
        { n: 25, texto: "E ambos estavam nus, o homem e a sua mulher, e não se envergonhavam." },
      ],
    },
    3: {
      titulo: "A queda e a promessa de redenção",
      nota: "Capítulo completo demonstrativo para leitura cronológica.",
      versos: [
        { n: 1, texto: "Ora, a serpente era mais astuta que todas as alimárias do campo que o Senhor Deus tinha feito. E esta disse à mulher: É assim que Deus disse: Não comereis de toda árvore do jardim?" },
        { n: 2, texto: "E disse a mulher à serpente: Do fruto das árvores do jardim comeremos." },
        { n: 3, texto: "Mas do fruto da árvore que está no meio do jardim, disse Deus: Não comereis dele, nem nele tocareis, para que não morrais." },
        { n: 4, texto: "Então a serpente disse à mulher: Certamente não morrereis." },
        { n: 5, texto: "Porque Deus sabe que no dia em que dele comerdes se abrirão os vossos olhos, e sereis como Deus, sabendo o bem e o mal." },
        { n: 6, texto: "E viu a mulher que aquela árvore era boa para se comer, agradável aos olhos e árvore desejável para dar entendimento; tomou do seu fruto, e comeu, e deu também a seu marido, e ele comeu com ela." },
        { n: 7, texto: "Então foram abertos os olhos de ambos, e conheceram que estavam nus; e coseram folhas de figueira, e fizeram para si aventais." },
        { n: 8, texto: "E ouviram a voz do Senhor Deus, que passeava no jardim pela viração do dia; e esconderam-se Adão e sua mulher da presença do Senhor Deus, entre as árvores do jardim." },
        { n: 9, texto: "E chamou o Senhor Deus a Adão, e disse-lhe: Onde estás?", red: true, speaker: "Deus" },
        { n: 10, texto: "E ele disse: Ouvi a tua voz soar no jardim, e temi, porque estava nu, e escondi-me." },
        { n: 11, texto: "E Deus disse: Quem te mostrou que estavas nu? Comeste tu da árvore de que te ordenei que não comesses?", red: true, speaker: "Deus" },
        { n: 12, texto: "Então disse Adão: A mulher que me deste por companheira, ela me deu da árvore, e comi." },
        { n: 13, texto: "E disse o Senhor Deus à mulher: Por que fizeste isto? E disse a mulher: A serpente me enganou, e eu comi.", red: true, speaker: "Deus" },
        { n: 14, texto: "Então o Senhor Deus disse à serpente: Porquanto fizeste isto, maldita serás mais que toda besta, e mais que todos os animais do campo; sobre o teu ventre andarás, e pó comerás todos os dias da tua vida.", red: true, speaker: "Deus" },
        { n: 15, texto: "E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar.", red: true, speaker: "Deus" },
        { n: 16, texto: "E à mulher disse: Multiplicarei grandemente a tua dor e a tua conceição; com dor terás filhos; e o teu desejo será para o teu marido, e ele te dominará.", red: true, speaker: "Deus" },
        { n: 17, texto: "E a Adão disse: Porquanto deste ouvidos à voz de tua mulher, e comeste da árvore de que te ordenei, dizendo: Não comerás dela, maldita é a terra por causa de ti; com dor comerás dela todos os dias da tua vida.", red: true, speaker: "Deus" },
        { n: 18, texto: "Espinhos e cardos também te produzirá; e comerás a erva do campo.", red: true, speaker: "Deus" },
        { n: 19, texto: "No suor do teu rosto comerás o teu pão, até que te tornes à terra; porque dela foste tomado; porquanto és pó e em pó te tornarás.", red: true, speaker: "Deus" },
        { n: 20, texto: "E chamou Adão o nome de sua mulher Eva, porquanto ela era a mãe de todos os viventes." },
        { n: 21, texto: "E fez o Senhor Deus a Adão e à sua mulher túnicas de peles, e os vestiu." },
        { n: 22, texto: "Então disse o Senhor Deus: Eis que o homem é como um de nós, sabendo o bem e o mal; ora, para que não estenda a sua mão, e tome também da árvore da vida, e coma, e viva eternamente.", red: true, speaker: "Deus" },
        { n: 23, texto: "O Senhor Deus, pois, o lançou fora do jardim do Éden, para lavrar a terra de que fora tomado." },
        { n: 24, texto: "E havendo lançado fora o homem, pôs querubins ao oriente do jardim do Éden, e uma espada inflamada que andava ao redor, para guardar o caminho da árvore da vida." },
      ],
    },
  },
  Salmos: {
    23: {
      titulo: "O cuidado do Pastor",
      nota: "Leitura para devocional, oração e anotação pessoal.",
      versos: [
        { n: 1, texto: "O Senhor é o meu pastor; nada me faltará." },
        { n: 3, texto: "Refrigera a minha alma; guia-me pelas veredas da justiça por amor do seu nome." },
        { n: 4, texto: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo." },
      ],
    },
  },
  Marcos: {
    10: {
      titulo: "Ensinos de Jesus",
      nota: "Leitura em tela escura, com fonte grande para iPad e falas de Jesus destacadas em vermelho.",
      versos: [
        { n: 13, texto: "Trouxeram-lhe crianças, para que as tocasse; mas os discípulos repreendiam os que as traziam." },
        { n: 14, texto: "Deixai vir a mim as crianças e não as impeçais, porque das tais é o Reino de Deus.", red: true, speaker: "Jesus" },
        { n: 15, texto: "Em verdade vos digo que quem não receber o Reino de Deus como uma criança de maneira nenhuma entrará nele.", red: true, speaker: "Jesus" },
        { n: 16, texto: "E, tomando-as nos seus braços e impondo-lhes as mãos, as abençoou." },
      ],
    },
  },
  Apocalipse: {
    22: {
      titulo: "Eis que venho sem demora",
      nota: "Texto de apoio para o módulo de escatologia e esperança cristã, com palavras de Jesus em vermelho.",
      versos: [
        { n: 7, texto: "Eis que cedo venho. Bem-aventurado aquele que guarda as palavras da profecia deste livro.", red: true, speaker: "Jesus" },
        { n: 12, texto: "Eis que cedo venho, e o meu galardão está comigo.", red: true, speaker: "Jesus" },
        { n: 17, texto: "O Espírito e a noiva dizem: Vem." },
        { n: 20, texto: "Certamente cedo venho.", red: true, speaker: "Jesus" },
        { n: 20.1, texto: "Amém. Ora vem, Senhor Jesus." },
      ],
    },
  },
};

const bibleChapterVerseTotals = {
  Gênesis: [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26],
  Jó: [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17],
  Marcos: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
  João: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25],
  Salmos: [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 14, 10, 8, 12, 15, 21, 10, 20, 14, 9, 6],
  Apocalipse: [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21],
};

function getFallbackBibleChapterContent(bookName, chapterNumber) {
  const existing = sampleBibleText[bookName]?.[chapterNumber];
  const total = bibleChapterVerseTotals[bookName]?.[chapterNumber - 1] || existing?.versos?.length || 31;
  const versesByNumber = new Map((existing?.versos || []).map((verse) => [Number(verse.n), verse]));
  const versos = Array.from({ length: total }, (_, index) => {
    const verseNumber = index + 1;
    return versesByNumber.get(verseNumber) || {
      n: verseNumber,
      texto: "A Bíblia completa está carregando. Conecte à internet uma vez para baixar e salvar o texto bíblico no dispositivo.",
    };
  });

  return {
    titulo: existing?.titulo || `${bookName} ${chapterNumber}`,
    nota: existing?.nota || "Capítulo preparado para leitura completa. Assim que o JSON bíblico for carregado, todos os versículos aparecem aqui.",
    versos,
  };
}

const bibleBookAliases = {
  genesis: "Gênesis",
  genese: "Gênesis",
  exodo: "Êxodo",
  levitico: "Levítico",
  numeros: "Números",
  deuteronomio: "Deuteronômio",
  josue: "Josué",
  juizes: "Juízes",
  salmo: "Salmos",
  salmos: "Salmos",
  proverbios: "Provérbios",
  eclesiastes: "Eclesiastes",
  cantares: "Cantares",
  isaias: "Isaías",
  jeremias: "Jeremias",
  lamentacoes: "Lamentações",
  ezequiel: "Ezequiel",
  daniel: "Daniel",
  oseias: "Oseias",
  joel: "Joel",
  amos: "Amós",
  obadias: "Obadias",
  jonas: "Jonas",
  miqueias: "Miqueias",
  naum: "Naum",
  habacuque: "Habacuque",
  sofonias: "Sofonias",
  ageu: "Ageu",
  zacarias: "Zacarias",
  malaquias: "Malaquias",
  mateus: "Mateus",
  marcos: "Marcos",
  lucas: "Lucas",
  joao: "João",
  atos: "Atos",
  romanos: "Romanos",
  galatas: "Gálatas",
  efesios: "Efésios",
  filipenses: "Filipenses",
  colossenses: "Colossenses",
  hebreus: "Hebreus",
  tiago: "Tiago",
  judas: "Judas",
  apocalipse: "Apocalipse",
};

const publicBibleSources = [
  {
    name: "Bíblia Livre",
    versionLabel: "BLivre",
    url: "https://sourceforge.net/projects/biblesuper/files/All%20Bibles%20-%20JSON/PT-Portuguese/blivre.json/download",
  },
  {
    name: "Almeida Revisada Imprensa Bíblica",
    versionLabel: "AA",
    url: "https://raw.githubusercontent.com/thiagobodruk/biblia/master/json/aa.json",
  },
];

function removeAccents(value) {
  return String(value || "").normalize("NFD").split("").filter((char) => {
    const code = char.charCodeAt(0);
    return code < 768 || code > 879;
  }).join("");
}

function normalizeName(value) {
  return removeAccents(value).toLowerCase().replaceAll(".", "").replaceAll(",", "").replaceAll("-", " ").trim().split(" ").filter(Boolean).join(" ");
}

function getCanonicalBookName(rawName, index = 0) {
  const direct = bibleBooks.find((book) => normalizeName(book.nome) === normalizeName(rawName));
  if (direct) return direct.nome;
  const alias = bibleBookAliases[normalizeName(rawName)];
  if (alias) return alias;
  return bibleBooks[index]?.nome || String(rawName || "Gênesis");
}

function getVerseText(verse) {
  if (typeof verse === "string") return verse;
  if (typeof verse === "number") return String(verse);
  return verse?.text || verse?.texto || verse?.verse_text || verse?.content || verse?.value || "";
}

function normalizeBiblePayload(payload, source) {
  const books = {};
  const flatRows = Array.isArray(payload) ? payload : payload?.verses || payload?.data || [];

  if (Array.isArray(flatRows) && flatRows[0]?.book && flatRows[0]?.chapter && flatRows[0]?.verse && flatRows[0]?.text) {
    flatRows.forEach((row) => {
      const bookIndex = Number(row.book) ? Number(row.book) - 1 : 0;
      const bookName = getCanonicalBookName(row.book, bookIndex);
      const chapterIndex = Number(row.chapter) - 1;
      const verseIndex = Number(row.verse) - 1;
      books[bookName] = books[bookName] || [];
      books[bookName][chapterIndex] = books[bookName][chapterIndex] || [];
      books[bookName][chapterIndex][verseIndex] = row.text;
    });
  } else {
    const rawBooks = Array.isArray(payload) ? payload : payload?.books || payload?.bible || payload?.data || [];
    rawBooks.forEach((book, index) => {
      const bookName = getCanonicalBookName(book.book || book.name || book.nome || book.book_name || book.title || book.abbrev || book.abbreviation, index);
      const chapters = book.chapters || book.capitulos || book.Chapters || book.chapter || [];
      if (!Array.isArray(chapters)) return;
      books[bookName] = chapters.map((chapter) => {
        const verses = Array.isArray(chapter) ? chapter : chapter.verses || chapter.versiculos || chapter.Verses || chapter.verse || Object.values(chapter || {});
        return Array.isArray(verses) ? verses.map(getVerseText).filter(Boolean) : [];
      });
    });
  }

  const loadedBooks = Object.values(books).filter((chapters) => Array.isArray(chapters) && chapters.length).length;
  if (loadedBooks < 20) return null;
  return { books, sourceName: source.name, versionLabel: source.versionLabel };
}

async function loadPublicBibleData() {
  for (const source of publicBibleSources) {
    try {
      const response = await fetch(source.url, { cache: "force-cache" });
      if (!response.ok) continue;
      const payload = await response.json();
      const normalized = normalizeBiblePayload(payload, source);
      if (normalized) return normalized;
    } catch (error) {
    }
  }
  return null;
}

const explicitRedLetters = {
  Gênesis: {
    1: [[3, 3], [6, 6], [9, 9], [11, 11], [14, 14], [20, 20], [22, 22], [24, 24], [26, 26], [28, 29]],
    2: [[16, 18]],
    3: [[9, 9], [11, 11], [13, 19], [22, 22]],
  },
  Êxodo: {
    3: [[4, 10], [12, 12], [14, 22]],
    20: [[1, 17]],
  },
  Mateus: {
    3: [[15, 15]],
    4: [[4, 4], [7, 7], [10, 10], [17, 19]],
    5: [[3, 48]],
    6: [[1, 34]],
    7: [[1, 27]],
    10: [[5, 42]],
    11: [[4, 30]],
    24: [[2, 51]],
    25: [[1, 46]],
    28: [[9, 10], [18, 20]],
  },
  Marcos: {
    1: [[15, 17], [25, 25], [38, 38], [41, 44]],
    10: [[3, 9], [11, 12], [14, 15], [18, 19], [21, 25], [27, 31], [33, 34], [36, 40], [42, 45], [49, 52]],
    13: [[2, 37]],
    16: [[15, 18]],
  },
  Lucas: {
    4: [[4, 12], [18, 19], [21, 21], [23, 27], [35, 35], [43, 43]],
    6: [[20, 49]],
    12: [[1, 59]],
    21: [[6, 36]],
    23: [[28, 31], [34, 34], [43, 43], [46, 46]],
    24: [[17, 19], [25, 27], [36, 39], [44, 49]],
  },
  João: {
    1: [[38, 39], [42, 42], [47, 51]],
    3: [[3, 21], [27, 36]],
    4: [[7, 26], [32, 38], [48, 50]],
    5: [[17, 47]],
    6: [[26, 70]],
    7: [[6, 8], [16, 24], [28, 29], [33, 34], [37, 38]],
    8: [[7, 58]],
    9: [[3, 5], [35, 41]],
    10: [[1, 18], [25, 38]],
    11: [[4, 4], [9, 11], [23, 26], [34, 44]],
    12: [[23, 50]],
    13: [[7, 38]],
    14: [[1, 31]],
    15: [[1, 27]],
    16: [[1, 33]],
    17: [[1, 26]],
    18: [[4, 8], [11, 11], [20, 23], [34, 37]],
    19: [[11, 11], [26, 30]],
    20: [[15, 17], [19, 23], [26, 29]],
    21: [[5, 6], [10, 19], [22, 22]],
  },
  Atos: {
    1: [[4, 8]],
    9: [[4, 6], [10, 16]],
  },
  Apocalipse: {
    1: [[8, 8], [11, 11], [17, 20]],
    2: [[1, 29]],
    3: [[1, 22]],
    21: [[5, 8]],
    22: [[7, 7], [12, 16], [20, 20]],
  },
};

function isVerseInRanges(ranges, verseNumber) {
  return ranges?.some(([start, end]) => verseNumber >= start && verseNumber <= end);
}

function detectSpeaker(bookName, text) {
  if (["Mateus", "Marcos", "Lucas", "João", "Atos", "Apocalipse"].includes(bookName)) return "Jesus";
  const lower = String(text || "").toLowerCase();
  if (lower.includes("disse deus") || lower.includes("senhor deus") || lower.includes("assim diz o senhor")) return "Deus";
  return "Deus";
}

function isRedLetterVerse(bookName, chapterNumber, verseNumber, text) {
  if (isVerseInRanges(explicitRedLetters[bookName]?.[chapterNumber], verseNumber)) return true;
  const lower = String(text || "").toLowerCase();
  const speechStarts = ["e disse deus", "disse deus", "falou deus", "respondeu deus", "e disse jesus", "disse jesus", "respondeu jesus", "falou jesus", "disse o senhor", "falou o senhor"];
  const phraseHits = ["em verdade vos digo", "eu sou o caminho", "eu sou a luz", "eu sou o pão", "eu sou a porta", "eu sou o bom pastor", "vinde a mim", "eis que cedo venho"];
  return speechStarts.some((phrase) => lower.startsWith(phrase) || lower.includes(phrase)) || phraseHits.some((phrase) => lower.includes(phrase));
}

function getBibleChapterContent(bookName, chapterNumber, bibleData) {
  const canonical = getCanonicalBookName(bookName);
  const loadedChapter = bibleData?.books?.[canonical]?.[chapterNumber - 1];

  if (Array.isArray(loadedChapter) && loadedChapter.length) {
    const versos = loadedChapter.map((text, index) => {
      const verseNumber = index + 1;
      const red = isRedLetterVerse(canonical, chapterNumber, verseNumber, text);
      return {
        n: verseNumber,
        texto: text,
        red,
        speaker: red ? detectSpeaker(canonical, text) : undefined,
      };
    });

    return {
      titulo: `${canonical} ${chapterNumber}`,
      nota: `${bibleData.versionLabel || "Bíblia"} • ${bibleData.sourceName || "texto bíblico"} • capítulo completo carregado para leitura offline após o primeiro acesso.`,
      versos,
    };
  }

  return getFallbackBibleChapterContent(canonical, chapterNumber);
}

const chronologicalBibleBooks = [
  { nome: "Gênesis", capitulos: 11, tema: "Criação, queda, dilúvio e nações" },
  { nome: "Jó", capitulos: 42, tema: "Sofrimento, soberania e temor" },
  { nome: "Gênesis", inicio: 12, capitulos: 39, tema: "Patriarcas, promessa e José" },
  { nome: "Êxodo", capitulos: 40, tema: "Libertação, aliança e tabernáculo" },
  { nome: "Levítico", capitulos: 27, tema: "Santidade, culto e sacrifícios" },
  { nome: "Números", capitulos: 36, tema: "Deserto, murmuração e fidelidade" },
  { nome: "Deuteronômio", capitulos: 34, tema: "Renovação da aliança" },
  { nome: "Josué", capitulos: 24, tema: "Entrada na promessa" },
  { nome: "Juízes", capitulos: 21, tema: "Ciclos de queda e livramento" },
  { nome: "Rute", capitulos: 4, tema: "Redenção no cotidiano" },
  { nome: "1 Samuel", capitulos: 31, tema: "Samuel, Saul e início da monarquia" },
  { nome: "2 Samuel", capitulos: 24, tema: "Reino de Davi e aliança" },
  { nome: "Salmos", capitulos: 35, tema: "Orações de Davi e adoração" },
  { nome: "1 Reis", capitulos: 22, tema: "Salomão e divisão do reino" },
  { nome: "Provérbios", capitulos: 31, tema: "Sabedoria para a vida" },
  { nome: "Eclesiastes", capitulos: 12, tema: "Vaidade e temor do Senhor" },
  { nome: "Cantares", capitulos: 8, tema: "Aliança, amor e poesia" },
  { nome: "2 Reis", capitulos: 25, tema: "Reis, profetas e queda" },
  { nome: "Obadias", capitulos: 1, tema: "Orgulho das nações" },
  { nome: "Joel", capitulos: 3, tema: "Arrependimento e derramar do Espírito" },
  { nome: "Jonas", capitulos: 4, tema: "Misericórdia para as nações" },
  { nome: "Amós", capitulos: 9, tema: "Justiça e juízo" },
  { nome: "Oseias", capitulos: 14, tema: "Amor fiel e adultério espiritual" },
  { nome: "Isaías", capitulos: 66, tema: "Santidade, juízo e Servo Sofredor" },
  { nome: "Miqueias", capitulos: 7, tema: "Justiça, humildade e Messias" },
  { nome: "Naum", capitulos: 3, tema: "Juízo contra Nínive" },
  { nome: "Sofonias", capitulos: 3, tema: "Dia do Senhor" },
  { nome: "Habacuque", capitulos: 3, tema: "Fé em meio à crise" },
  { nome: "Jeremias", capitulos: 52, tema: "Aliança quebrada e esperança" },
  { nome: "Lamentações", capitulos: 5, tema: "Dor, juízo e misericórdia" },
  { nome: "Ezequiel", capitulos: 48, tema: "Glória, exílio e restauração" },
  { nome: "Daniel", capitulos: 12, tema: "Fidelidade no exílio e visões" },
  { nome: "Esdras", capitulos: 10, tema: "Retorno e reconstrução espiritual" },
  { nome: "Neemias", capitulos: 13, tema: "Muros, liderança e reforma" },
  { nome: "Ester", capitulos: 10, tema: "Providência no exílio" },
  { nome: "Ageu", capitulos: 2, tema: "Prioridade da casa de Deus" },
  { nome: "Zacarias", capitulos: 14, tema: "Restauração e Rei vindouro" },
  { nome: "Malaquias", capitulos: 4, tema: "Aliança, culto e esperança" },
  { nome: "1 Crônicas", capitulos: 29, tema: "Memória do reino e templo" },
  { nome: "2 Crônicas", capitulos: 36, tema: "Reis, templo e exílio" },
  { nome: "Mateus", capitulos: 28, tema: "Jesus, Rei prometido" },
  { nome: "Marcos", capitulos: 16, tema: "Jesus, Servo poderoso" },
  { nome: "Lucas", capitulos: 24, tema: "Jesus, Salvador dos perdidos" },
  { nome: "João", capitulos: 21, tema: "Jesus, Verbo e Filho de Deus" },
  { nome: "Atos", capitulos: 28, tema: "Espírito Santo e missão da Igreja" },
  { nome: "Tiago", capitulos: 5, tema: "Fé prática" },
  { nome: "Gálatas", capitulos: 6, tema: "Graça e liberdade" },
  { nome: "1 Tessalonicenses", capitulos: 5, tema: "Esperança da volta de Cristo" },
  { nome: "2 Tessalonicenses", capitulos: 3, tema: "Perseverança e escatologia" },
  { nome: "1 Coríntios", capitulos: 16, tema: "Igreja, dons e ressurreição" },
  { nome: "2 Coríntios", capitulos: 13, tema: "Fraqueza, consolo e ministério" },
  { nome: "Romanos", capitulos: 16, tema: "Evangelho, justiça e vida no Espírito" },
  { nome: "Efésios", capitulos: 6, tema: "Igreja, graça e batalha espiritual" },
  { nome: "Filipenses", capitulos: 4, tema: "Alegria em Cristo" },
  { nome: "Colossenses", capitulos: 4, tema: "Supremacia de Cristo" },
  { nome: "Filemom", capitulos: 1, tema: "Perdão e reconciliação" },
  { nome: "1 Timóteo", capitulos: 6, tema: "Ordem, piedade e liderança" },
  { nome: "Tito", capitulos: 3, tema: "Doutrina e boas obras" },
  { nome: "1 Pedro", capitulos: 5, tema: "Sofrimento e esperança" },
  { nome: "Hebreus", capitulos: 13, tema: "Cristo superior e nova aliança" },
  { nome: "2 Timóteo", capitulos: 4, tema: "Fidelidade até o fim" },
  { nome: "2 Pedro", capitulos: 3, tema: "Falsos mestres e volta do Senhor" },
  { nome: "Judas", capitulos: 1, tema: "Batalhar pela fé" },
  { nome: "1 João", capitulos: 5, tema: "Amor, verdade e comunhão" },
  { nome: "2 João", capitulos: 1, tema: "Verdade e amor" },
  { nome: "3 João", capitulos: 1, tema: "Hospitalidade e fidelidade" },
  { nome: "Apocalipse", capitulos: 22, tema: "Cordeiro vencedor e nova criação" },
  { nome: "Salmos", inicio: 36, capitulos: 115, tema: "Louvor, lamento, sabedoria e esperança" },
];

function formatChapterRange(book, start, count) {
  const end = start + count - 1;
  return count === 1 ? `${book} ${start}` : `${book} ${start}–${end}`;
}

function parseChapterRange(passage) {
  const lastSpace = passage.lastIndexOf(" ");
  if (lastSpace < 0) return [passage];
  const book = passage.slice(0, lastSpace);
  const range = passage.slice(lastSpace + 1);
  const separator = range.includes("–") ? "–" : range.includes("-") ? "-" : null;
  const start = Number(separator ? range.split(separator)[0] : range);
  const end = Number(separator ? range.split(separator)[1] : range);
  if (!start || !end) return [passage];
  return Array.from({ length: Math.max(1, end - start + 1) }, (_, index) => `${book} ${start + index}`);
}

function splitChapterLabel(label) {
  const lastSpace = label.lastIndexOf(" ");
  if (lastSpace < 0) return { bookName: label, chapterNumber: 1 };
  return { bookName: label.slice(0, lastSpace), chapterNumber: Number(label.slice(lastSpace + 1)) || 1 };
}

function expandReadingChapters(reading) {
  return reading.passagens.flatMap(parseChapterRange);
}

function getPlanDateLabel(day) {
  const base = new Date(2025, 6, 18);
  const date = new Date(base);
  date.setDate(base.getDate() + day - 1);
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

function getChronologicalStatus(day) {
  const expectedDay = 11;
  const lost = Math.max(0, day - expectedDay + 358);
  return day > expectedDay ? `${lost} Dias Perdidos` : `${Math.max(0, 365 - day)} Dias Restantes`;
}

function makeBible365ChronologicalReadings() {
  const chapters = chronologicalBibleBooks.flatMap((section) => {
    const start = section.inicio || 1;
    return Array.from({ length: section.capitulos }, (_, index) => ({
      livro: section.nome,
      capitulo: start + index,
      tema: section.tema,
    }));
  });

  return Array.from({ length: 365 }, (_, dayIndex) => {
    const start = Math.floor((dayIndex * chapters.length) / 365);
    const end = Math.floor(((dayIndex + 1) * chapters.length) / 365);
    const dayChapters = chapters.slice(start, Math.max(start + 1, end));
    const grouped = dayChapters.reduce((acc, item) => {
      const last = acc[acc.length - 1];
      if (last && last.livro === item.livro && last.start + last.count === item.capitulo) {
        last.count += 1;
      } else {
        acc.push({ livro: item.livro, start: item.capitulo, count: 1 });
      }
      return acc;
    }, []);
    const passagens = grouped.map((group) => formatChapterRange(group.livro, group.start, group.count));
    const tema = dayChapters[0]?.tema || "Leitura bíblica";
    return {
      dia: dayIndex + 1,
      titulo: passagens.join(" + "),
      tema,
      passagens,
    };
  });
}

function makeReadings(seed, total, books) {
  return Array.from({ length: total }, (_, index) => {
    const book = books[index % books.length];
    const chapter = (index % 12) + 1;
    return {
      dia: index + 1,
      titulo: `${book} ${chapter}`,
      tema: seed[index % seed.length],
      passagens: [`${book} ${chapter}`, `${books[(index + 1) % books.length]} ${(chapter % 10) + 1}`],
    };
  });
}

const readingPlans = [
  {
    id: "biblia-365",
    titulo: "Bíblia em 365 Dias",
    subtitulo: "Leitura da Bíblia em 365 dias: um pouco por dia, em ordem cronológica narrativa, com tudo liberado para marcar como lido.",
    dias: 365,
    categoria: "Plano anual",
    progresso: 18,
    cor: "from-orange-400 via-rose-500 to-purple-700",
    foco: "Bíblia completa em 1 ano",
    leituras: makeBible365ChronologicalReadings(),
  },
  {
    id: "cronologico",
    titulo: "Cronológico em 1 Ano",
    subtitulo: "Acompanhe a narrativa bíblica em ordem histórica, com visão de contexto e continuidade.",
    dias: 365,
    categoria: "Cronológico",
    progresso: 7,
    cor: "from-emerald-400 via-cyan-500 to-blue-700",
    foco: "Contexto histórico",
    leituras: makeBible365ChronologicalReadings(),
  },
  {
    id: "evangelhos-40",
    titulo: "Evangelhos em 40 Dias",
    subtitulo: "Um mergulho em Jesus: nascimento, ministério, cruz, ressurreição e missão.",
    dias: 40,
    categoria: "Jesus",
    progresso: 42,
    cor: "from-amber-300 via-orange-500 to-red-700",
    foco: "Cristologia prática",
    leituras: makeReadings(["Encarnação", "Reino", "Milagres", "Parábolas", "Cruz", "Ressurreição"], 24, ["Mateus", "Marcos", "Lucas", "João"]),
  },
  {
    id: "arrebatamento-21",
    titulo: "Arrebatamento e Esperança",
    subtitulo: "21 módulos sobre volta de Cristo, vigilância, Igreja, tribulação e acontecimentos finais.",
    dias: 21,
    categoria: "Escatologia",
    progresso: 33,
    cor: "from-indigo-400 via-violet-600 to-fuchsia-800",
    foco: "Fim dos tempos",
    leituras: makeReadings(["Promessa da volta", "Encontrar o Senhor", "Vigilância", "Noiva preparada", "Tribulação", "Reino", "Eternidade"], 21, ["João", "Atos", "1 Tessalonicenses", "2 Tessalonicenses", "Mateus", "Daniel", "Apocalipse"]),
  },
  {
    id: "teologia-52",
    titulo: "Teologia Essencial em 52 Semanas",
    subtitulo: "Bibliologia, Deus, Cristo, Espírito Santo, salvação, Igreja, missão e escatologia.",
    dias: 364,
    categoria: "Curso completo",
    progresso: 11,
    cor: "from-slate-400 via-slate-600 to-black",
    foco: "Formação teológica",
    leituras: makeReadings(["Bibliologia", "Hermenêutica", "Deus", "Cristo", "Espírito", "Salvação", "Igreja", "Escatologia"], 52, ["2 Timóteo", "Hebreus", "Romanos", "Efésios", "João", "Atos", "Apocalipse"]),
  },
  {
    id: "artes-30",
    titulo: "Arte como Altar",
    subtitulo: "30 estudos unindo Bíblia, teatro, dança, música, escrita e adoração.",
    dias: 30,
    categoria: "Arte e fé",
    progresso: 55,
    cor: "from-pink-500 via-orange-500 to-yellow-500",
    foco: "Chamado artístico",
    leituras: makeReadings(["Dom", "Excelência", "Humildade", "Palco", "Serviço", "Beleza", "Adoração"], 30, ["Romanos", "Colossenses", "Salmos", "Êxodo", "1 Pedro", "João"]),
  },
  {
    id: "jovem-90",
    titulo: "Jovem Cristão em 90 Dias",
    subtitulo: "Identidade, santidade, ansiedade, redes sociais, namoro, vocação e discernimento.",
    dias: 90,
    categoria: "Vida atual",
    progresso: 0,
    cor: "from-lime-400 via-emerald-600 to-zinc-950",
    foco: "2026 sem confusão",
    leituras: makeReadings(["Identidade", "Pureza", "Mente", "Ansiedade", "Relacionamentos", "Propósito"], 30, ["Romanos", "Efésios", "Provérbios", "Tiago", "1 Pedro", "1 Timóteo"]),
  },
  {
    id: "personagens-60",
    titulo: "Personagens que Marcaram a História Bíblica",
    subtitulo: "60 leituras com perfil, conflito, lição espiritual e aplicação para cena.",
    dias: 60,
    categoria: "Personagens",
    progresso: 0,
    cor: "from-yellow-400 via-amber-700 to-stone-950",
    foco: "Histórias vivas",
    leituras: makeReadings(["Chamado", "Queda", "Restauração", "Coragem", "Fidelidade", "Missão"], 36, ["Gênesis", "Êxodo", "Rute", "1 Samuel", "Ester", "Daniel", "Lucas", "Atos"]),
  },
  {
    id: "apologetica-45",
    titulo: "Apologética para Conversas Difíceis",
    subtitulo: "Fé, razão, sofrimento, Bíblia, ciência, verdade, sexualidade e exclusividade de Cristo.",
    dias: 45,
    categoria: "Defesa da fé",
    progresso: 0,
    cor: "from-blue-400 via-indigo-700 to-black",
    foco: "Mansidão e firmeza",
    leituras: makeReadings(["Verdade", "Sofrimento", "Ressurreição", "Cosmovisão", "Diálogo", "Graça"], 28, ["1 Pedro", "Atos", "Romanos", "João", "Colossenses", "Jó"]),
  },
  {
    id: "oracao-30",
    titulo: "30 Dias de Oração e Secreto",
    subtitulo: "Reconstrução da vida devocional com oração, jejum, confissão, silêncio e Palavra.",
    dias: 30,
    categoria: "Devocional",
    progresso: 0,
    cor: "from-teal-300 via-cyan-700 to-slate-950",
    foco: "Secreto com Deus",
    leituras: makeReadings(["Oração", "Silêncio", "Entrega", "Confissão", "Perseverança", "Intimidade"], 30, ["Salmos", "Mateus", "Lucas", "João", "Filipenses", "Tiago"]),
  },
  {
    id: "mulheres-40",
    titulo: "Mulheres da Bíblia em 40 Estudos",
    subtitulo: "Sara, Rebeca, Rute, Ester, Maria, Marta, Maria Madalena e outras histórias de fé.",
    dias: 40,
    categoria: "Personagens",
    progresso: 0,
    cor: "from-rose-300 via-fuchsia-600 to-purple-950",
    foco: "Fé e coragem",
    leituras: makeReadings(["Espera", "Coragem", "Redenção", "Serviço", "Testemunho", "Obediência"], 30, ["Gênesis", "Rute", "Ester", "Lucas", "João", "Atos"]),
  },
  {
    id: "profetas-50",
    titulo: "Profetas e Voz Profética",
    subtitulo: "Isaías, Jeremias, Ezequiel, Daniel e profetas menores com aplicação para hoje.",
    dias: 50,
    categoria: "Profetas",
    progresso: 0,
    cor: "from-red-500 via-orange-700 to-black",
    foco: "Chamado e confronto",
    leituras: makeReadings(["Santidade", "Justiça", "Juízo", "Consolo", "Esperança", "Messias"], 32, ["Isaías", "Jeremias", "Ezequiel", "Daniel", "Oseias", "Joel", "Malaquias"]),
  },
];

const DAILY_DEVOTIONAL_START = new Date(2025, 4, 23);

const devocionais = [
  {
    dia: "Dia 1",
    titulo: "Cristo morreu em nosso lugar",
    versiculo: "Romanos 5:8",
    versiculoTexto: "Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.",
    reflexao: "O evangelho não começa com a sua performance, mas com a graça de Deus. Antes de você pregar, atuar, escrever ou cantar, Cristo já o amou primeiro. A cruz cura a ansiedade de provar valor e chama você a servir por gratidão.",
    contexto: "Romanos 5 mostra que a nossa paz com Deus não nasce do mérito humano, mas da justificação pela fé. Paulo contrasta nossa fraqueza com a iniciativa divina: Cristo não morreu por pessoas prontas, fortes e limpas; Ele morreu por pecadores. Isso humilha o orgulho e cura a vergonha.",
    leituraGuiada: ["Leia Romanos 5:1-11 em voz baixa.", "Sublinhe as palavras paz, graça, amor e Cristo.", "Ore agradecendo por uma área em que você tentou provar valor em vez de receber graça."],
    musica: { titulo: "Preciso de Ti", artista: "Diante do Trono", motivo: "para conduzir o coração ao arrependimento, dependência e fome pela presença de Deus" },
    oracao: "Jesus, guarda meu coração da vaidade e reacende em mim a simplicidade do primeiro amor.",
  },
  {
    dia: "Dia 2",
    titulo: "Quando o palco vira altar",
    versiculo: "Colossenses 3:23",
    versiculoTexto: "E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens.",
    reflexao: "A arte entregue a Deus deixa de ser apenas expressão pessoal e se torna serviço. O ensaio também é espiritualidade quando é feito com reverência, disciplina e amor ao próximo.",
    contexto: "Colossenses 3 fala de uma vida inteira submetida ao senhorio de Cristo. Paulo não separa culto e cotidiano: trabalho, relações, palavras, serviço e intenções precisam ser feitos diante do Senhor. Para o artista cristão, isso transforma palco, texto, corpo e voz em mordomia espiritual.",
    leituraGuiada: ["Leia Colossenses 3:12-24.", "Observe como Paulo liga caráter, gratidão e serviço.", "Anote uma área do seu ministério artístico que precisa de mais excelência e menos vaidade."],
    musica: { titulo: "Sonda-me, Usa-me", artista: "Aline Barros", motivo: "para consagrar dons, intenções, corpo, voz e criatividade ao serviço de Deus" },
    oracao: "Senhor, santifica meus dons para que apontem para Cristo e não para mim.",
  },
  {
    dia: "Dia 3",
    titulo: "A mente renovada",
    versiculo: "Romanos 12:2",
    versiculoTexto: "E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento.",
    reflexao: "Nem toda voz que parece moderna é verdadeira. A mente cristã precisa ser lavada pela Palavra para discernir desejos, tendências, pressões e narrativas que tentam ocupar o lugar de Cristo.",
    contexto: "Depois de expor a misericórdia de Deus, Paulo chama a Igreja a uma resposta integral: corpo entregue e mente renovada. O problema não é apenas comportamento externo, mas forma de pensar. Quem pensa como o mundo acaba desejando como o mundo e decidindo como o mundo.",
    leituraGuiada: ["Leia Romanos 12 inteiro.", "Liste três padrões do mundo que mais pressionam sua fé hoje.", "Escreva uma verdade bíblica que confronte cada padrão."],
    musica: { titulo: "Com Muito Louvor", artista: "Cassiane", motivo: "para lembrar que a fé permanece adorando mesmo quando atravessa lutas e processos" },
    oracao: "Espírito Santo, renova minha mente e me dá discernimento para reconhecer o que não vem de Ti.",
  },
  {
    dia: "Dia 4",
    titulo: "O secreto que sustenta o público",
    versiculo: "Mateus 6:6",
    versiculoTexto: "Tu, porém, quando orares, entra no teu quarto e, fechando a porta, orarás a teu Pai que está em secreto.",
    reflexao: "Quem aparece muito precisa se esconder em Deus com frequência. O secreto purifica motivações, cura o desejo de aplauso e devolve o coração ao Pai.",
    contexto: "Mateus 6 confronta uma espiritualidade feita para ser vista. Jesus não condena oração pública, mas expõe a motivação teatralizada da religião que busca plateia. O Pai vê o secreto e forma o discípulo longe das luzes.",
    leituraGuiada: ["Leia Mateus 6:1-18.", "Pergunte: o que eu faço para Deus e o que faço para ser reconhecido?", "Separe dez minutos sem celular para orar em silêncio."],
    musica: { titulo: "Faz Chover", artista: "Fernandinho", motivo: "para buscar renovação espiritual, quebrantamento e sede pela presença de Deus" },
    oracao: "Pai, leva-me de volta ao quarto secreto e trata minhas motivações diante de Ti.",
  },
  {
    dia: "Dia 5",
    titulo: "A Noiva que espera",
    versiculo: "Apocalipse 22:17",
    versiculoTexto: "O Espírito e a noiva dizem: Vem.",
    reflexao: "A esperança da volta de Cristo não deve produzir medo vazio, mas amor vigilante. A Igreja espera como Noiva: com lâmpada acesa, vestes preparadas e coração voltado para o Noivo.",
    contexto: "Apocalipse termina com convite e clamor. Depois de visões de conflito, juízo e vitória, o foco final é comunhão: Deus com seu povo. A escatologia bíblica termina em desejo por Cristo, não em obsessão por datas.",
    leituraGuiada: ["Leia Apocalipse 22:12-21.", "Marque as expressões vem e graça.", "Ore por uma vida preparada, santa e cheia de esperança."],
    musica: { titulo: "Agnus Dei", artista: "Diante do Trono", motivo: "para adorar o Cordeiro e alinhar o coração ao clamor da Noiva pela volta de Cristo" },
    oracao: "Vem, Senhor Jesus. Prepara minha vida, minha casa e meus dons para Ti.",
  },
  {
    dia: "Dia 6",
    titulo: "Descanso para a alma cansada",
    versiculo: "Mateus 11:28",
    versiculoTexto: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    reflexao: "Jesus não chama apenas os fortes. Ele chama cansados, sobrecarregados e gente que não consegue mais sustentar a própria imagem. O descanso verdadeiro começa quando paramos de fingir força diante Dele.",
    contexto: "Em Mateus 11, Jesus revela o coração manso e humilde do Messias. Ele não oferece fuga irresponsável, mas jugo suave: uma nova forma de carregar a vida com Ele, debaixo da graça e da obediência.",
    leituraGuiada: ["Leia Mateus 11:25-30.", "Identifique o peso que você tem carregado sozinho.", "Entregue esse peso em oração e escreva uma frase de descanso."],
    musica: { titulo: "Advogado Fiel", artista: "Bruna Karla", motivo: "para lembrar que Cristo sustenta, defende e acolhe a alma cansada diante do Pai" },
    oracao: "Jesus manso e humilde, ensina minha alma a descansar sem fugir da obediência.",
  },
  {
    dia: "Dia 7",
    titulo: "Luz em tempos confusos",
    versiculo: "Salmos 119:105",
    versiculoTexto: "Lâmpada para os meus pés é tua palavra e luz para o meu caminho.",
    reflexao: "Deus nem sempre mostra o caminho inteiro, mas ilumina o próximo passo. Em tempos confusos, a Palavra não é enfeite devocional; é direção para decisões reais.",
    contexto: "O Salmo 119 celebra a Palavra como fonte de vida, consolo, correção e sabedoria. A imagem da lâmpada mostra direção suficiente para caminhar em fidelidade, mesmo sem controlar todo o futuro.",
    leituraGuiada: ["Leia Salmos 119:97-112.", "Anote uma decisão que precisa ser iluminada pela Palavra.", "Ore pedindo obediência para o próximo passo."],
    musica: { titulo: "Raridade", artista: "Anderson Freire", motivo: "para lembrar que sua identidade vem de Deus e que a Palavra ilumina seu valor em Cristo" },
    oracao: "Senhor, ilumina meus passos e livra-me de decidir guiado apenas por emoção.",
  },
  {
    dia: "Dia 8",
    titulo: "Coragem para obedecer",
    versiculo: "Josué 1:9",
    versiculoTexto: "Sê forte e corajoso; não temas, nem te espantes, porque o Senhor teu Deus é contigo por onde quer que andares.",
    reflexao: "Coragem bíblica não é ausência de medo; é obediência sustentada pela presença de Deus. Quando o chamado parece maior que você, a promessa é: o Senhor vai contigo.",
    contexto: "Josué assume liderança depois de Moisés. O povo está diante de uma nova fase, e Deus repete o chamado à coragem ligado à meditação na Lei. A força de Josué não estaria em personalidade, mas na presença e na Palavra.",
    leituraGuiada: ["Leia Josué 1:1-9.", "Observe quantas vezes Deus chama Josué à coragem.", "Escreva uma obediência que você tem adiado por medo."],
    musica: { titulo: "Ressuscita-me", artista: "Aline Barros", motivo: "para fortalecer a fé quando Deus chama à coragem, obediência e recomeço" },
    oracao: "Deus, dá-me coragem obediente e firma meus pés na tua Palavra.",
  },
  {
    dia: "Dia 9",
    titulo: "Graça que restaura depois da queda",
    versiculo: "João 21:17",
    versiculoTexto: "Senhor, tu sabes todas as coisas; tu sabes que eu te amo.",
    reflexao: "Jesus não apenas perdoa Pedro; Ele restaura seu chamado. A queda não precisa ser o último capítulo quando o coração volta para Cristo em verdade.",
    contexto: "Depois de negar Jesus, Pedro encontra o Ressuscitado à beira do mar. As três perguntas de Jesus tratam a ferida das três negações. A restauração vem com amor e responsabilidade: apascentar as ovelhas.",
    leituraGuiada: ["Leia João 21:15-19.", "Perceba como Jesus trata Pedro sem humilhação pública vazia.", "Ore sobre uma área em que você precisa ser restaurado."],
    musica: { titulo: "Restitui", artista: "Toque no Altar", motivo: "para meditar na restauração de Deus depois de quedas, perdas e recomeços" },
    oracao: "Jesus, restaura meu amor e recoloca meus passos no teu chamado.",
  },
  {
    dia: "Dia 10",
    titulo: "Chamado que nasce no fogo",
    versiculo: "Êxodo 3:5",
    versiculoTexto: "Tira as sandálias dos pés, porque o lugar em que estás é terra santa.",
    reflexao: "Antes de Moisés enfrentar Faraó, ele precisa aprender reverência diante da sarça. Chamado sem temor vira ativismo; temor sem obediência vira paralisia.",
    contexto: "Êxodo 3 apresenta Deus ouvindo o clamor do seu povo e chamando Moisés. O libertador reluta, apresenta limitações e precisa aprender que a missão começa no Eu Sou, não na autoconfiança humana.",
    leituraGuiada: ["Leia Êxodo 3 inteiro.", "Liste as desculpas que Moisés apresenta.", "Escreva quais desculpas você tem apresentado diante do chamado de Deus."],
    musica: { titulo: "Deus de Promessas", artista: "Toque no Altar", motivo: "para responder ao chamado confiando na fidelidade de Deus" },
    oracao: "Senhor, tira minhas sandálias de orgulho e medo. Envia-me com tua presença.",
  },
  {
    dia: "Dia 11",
    titulo: "Santidade quando ninguém vê",
    versiculo: "Daniel 1:8",
    versiculoTexto: "Daniel assentou no seu coração não se contaminar.",
    reflexao: "A fidelidade pública começa com decisões privadas. Daniel não esperou a fornalha ou a cova dos leões para ser fiel; ele decidiu antes, na mesa.",
    contexto: "Daniel vive no exílio, cercado por uma cultura que tenta redefinir nome, linguagem, alimentação e lealdade. Sua decisão mostra que santidade começa antes dos grandes testes, em escolhas aparentemente pequenas.",
    leituraGuiada: ["Leia Daniel 1.", "Observe quais pressões tentavam remodelar a identidade dos jovens hebreus.", "Defina um limite prático para proteger sua fidelidade nesta semana."],
    musica: { titulo: "Sabor de Mel", artista: "Damares", motivo: "para lembrar que fidelidade no secreto também atravessa processos, oposição e espera" },
    oracao: "Deus, firma meu coração antes da pressão e ensina-me santidade no secreto.",
  },
  {
    dia: "Dia 12",
    titulo: "Perdão sem romantizar a dor",
    versiculo: "Gênesis 50:20",
    versiculoTexto: "Vós bem intentastes mal contra mim, porém Deus o tornou em bem.",
    reflexao: "José não chama o mal de bem. Ele reconhece a maldade dos irmãos, mas também reconhece a soberania de Deus conduzindo a história para preservação de vida.",
    contexto: "A história de José passa por inveja, traição, escravidão, falsa acusação, prisão e governo. O perdão em Gênesis 50 não nasce de negação da dor, mas de uma visão maior da providência divina.",
    leituraGuiada: ["Leia Gênesis 45 e 50:15-21.", "Separe o que foi mal humano e o que Deus redimiu na história.", "Ore por cura sem negar a verdade do que aconteceu."],
    musica: { titulo: "Olha pra Mim", artista: "Toque no Altar", motivo: "para orar por cura, dependência e confiança na providência de Deus" },
    oracao: "Deus, cura minhas memórias e ensina-me a confiar na tua providência sem negar minhas dores.",
  },
  {
    dia: "Dia 13",
    titulo: "A beleza da presença de Deus",
    versiculo: "Salmos 27:4",
    versiculoTexto: "Uma coisa pedi ao Senhor e a buscarei: que eu possa morar na casa do Senhor todos os dias da minha vida.",
    reflexao: "Davi não pede primeiro palco, vitória ou reconhecimento. Ele deseja contemplar a beleza do Senhor. A alma que contempla Deus é menos escrava da aprovação humana.",
    contexto: "O Salmo 27 mistura confiança, perigo, desejo pela presença e espera. Davi enfrenta adversários, mas sua maior busca é o Senhor. A adoração bíblica não ignora guerra; ela escolhe presença no meio dela.",
    leituraGuiada: ["Leia Salmos 27.", "Marque os pedidos de Davi.", "Escreva o que hoje tem competido com seu desejo pela presença de Deus."],
    musica: { titulo: "Aclame ao Senhor", artista: "Diante do Trono", motivo: "para contemplar a beleza, a grandeza e a majestade do Senhor" },
    oracao: "Senhor, reacende em mim o desejo por tua presença acima de qualquer aplauso.",
  },
  {
    dia: "Dia 14",
    titulo: "O Espírito e a missão",
    versiculo: "Atos 1:8",
    versiculoTexto: "Recebereis poder, ao descer sobre vós o Espírito Santo, e sereis minhas testemunhas.",
    reflexao: "O poder do Espírito não é dado para autopromoção espiritual, mas para testemunho. A Igreja recebe presença, coragem e missão para anunciar Cristo até os confins da terra.",
    contexto: "Atos começa com a promessa do Espírito e a ascensão de Jesus. Os discípulos queriam entender tempos e épocas; Jesus os redireciona para missão. A espera pelo fim não paralisa; ela envia.",
    leituraGuiada: ["Leia Atos 1 e 2.", "Observe a relação entre Espírito, testemunho e comunidade.", "Escreva uma forma prática de testemunhar Cristo com sua arte nesta semana."],
    musica: { titulo: "Sou Humano", artista: "Bruna Karla", motivo: "para reconhecer dependência do Espírito Santo na missão e na caminhada cristã" },
    oracao: "Espírito Santo, enche-me de coragem, amor e verdade para testemunhar Jesus com minha vida e minha arte.",
  },
];

function getDailyDevotional() {
  const today = new Date();
  const normalizedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysPassed = Math.max(0, Math.floor((normalizedToday - DAILY_DEVOTIONAL_START) / 86400000));
  const devotional = devocionais[daysPassed % devocionais.length] || devocionais[0];
  const label = normalizedToday.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
  return { devotional, label };
}

const spotifyTrackUrls = {
  "Preciso de Ti|Diante do Trono": "https://open.spotify.com/track/6GjcSNYBRCFpQFtEFKjw6p",
  "Com Muito Louvor|Cassiane": "https://open.spotify.com/track/0suvVjf5ZT2Pasu1cDPEVr",
  "Sonda-me, Usa-me|Aline Barros": "https://open.spotify.com/track/0ozX4JUZkx1OWMVKRbaWTQ",
  "Faz Chover|Fernandinho": "https://open.spotify.com/track/4P9TQXnhJanfmhodc20XOz",
  "Reckless Love|Cory Asbury": "https://open.spotify.com/track/7rKCmo4SZhKubupJdsuM5S",
  "Available|Elevation Worship": "https://open.spotify.com/track/6TbG237Ir0ublbxXq2T3Yp",
  "Build My Life|Pat Barrett": "https://open.spotify.com/track/2UeOsbOZ3h1QxUX2Jfw42j",
  "The More I Seek You|Kari Jobe": "https://open.spotify.com/track/5legy0bvOLwAo0eBjXmee6",
  "Even So Come|Passion": "https://open.spotify.com/track/0pzPfzBwovCvzNkk8OZLw1",
  "Rest On Us|Maverick City Music": "https://open.spotify.com/track/0A402ZdxwQzaVdyH5Zav5X",
  "Word of God Speak|MercyMe": "https://open.spotify.com/track/1hXcrsQffEBFCW0Pb3Envz",
  "Oceans|Hillsong UNITED": "https://open.spotify.com/track/5Mw9bXG1dLNhbjofkVS2oR",
  "Graves Into Gardens|Elevation Worship": "https://open.spotify.com/track/40TejHtJdQkd1nIxKf43CL",
  "Here I Am To Worship|Tim Hughes": "https://open.spotify.com/track/3feKDxwC2RzOPwbQ6X3vLF",
  "Take My Life|Chris Tomlin": "https://open.spotify.com/track/3EkpnkpE9rBKjSXwBqJ43o",
  "Way Maker|Sinach": "https://open.spotify.com/track/3VACsP3SHXxGbpvSEd5KkR",
  "Agnus Dei|Michael W. Smith": "https://open.spotify.com/track/1qxDqbzmWODOkr0Ja5Iotz",
  "Holy Spirit|Bryan & Katie Torwalt": "https://open.spotify.com/track/1AtwsVXr1zaZf4YgIEOlDK",
};

function getSpotifySearchUrl(musica) {
  const key = `${musica.titulo}|${musica.artista}`;
  return spotifyTrackUrls[key] || `https://open.spotify.com/search/${encodeURIComponent(`${musica.titulo} ${musica.artista}`)}`;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Bom dia";
  if (hour >= 12 && hour < 18) return "Boa tarde";
  return "Boa noite";
}

const studies = [
  {
    id: "jovem-cristao-2026",
    titulo: "Jovem cristão em tempos de confusão",
    categoria: "Vida atual",
    duracao: "9 aulas densas",
    nivel: "Essencial",
    topicos: ["identidade em Cristo", "pureza", "redes sociais", "discernimento", "ansiedade", "vocação"],
    resumo: "Um curso para ajudar jovens cristãos a atravessarem 2026 com mente bíblica, coração sensível e discernimento espiritual.",
    abas: {
      visão: [
        "A juventude cristã não é chamada a fugir do mundo por medo, mas a viver no mundo com uma mente renovada. A pergunta central não é apenas 'isso é permitido?', mas 'isso me aproxima de Cristo, forma meu caráter e glorifica a Deus?'.",
        "O app se propõe a ser uma base de estudo para iluminar zonas de confusão: identidade, desejo, pressão digital, relativismo, ansiedade, sexualidade, fama, vocação e espiritualidade rasa.",
        "O jovem cristão de hoje é discipulado por muitas vozes ao mesmo tempo: vídeos curtos, influenciadores, músicas, séries, algoritmos, amigos, traumas, desejos e medos. Se a Palavra não se tornar a voz principal, a fé vira apenas uma opinião entre muitas pressões.",
        "Maturidade não é ficar sem dúvidas; é aprender a levar as dúvidas para Cristo, para a Escritura e para uma comunidade saudável. A dúvida tratada com humildade pode amadurecer a fé; a dúvida alimentada pelo orgulho pode corroer o coração.",
      ],
      bíblia: [
        "Romanos 12 apresenta uma espiritualidade que começa pela entrega do corpo e continua pela renovação da mente. Não há maturidade cristã sem transformação da forma de pensar.",
        "Efésios 4 ensina a abandonar a velha maneira de viver e revestir-se do novo homem criado segundo Deus em justiça e santidade. A fé precisa alcançar hábitos, linguagem, amizades e desejos.",
        "Daniel 1 ajuda a pensar identidade em ambiente de pressão cultural. Daniel aprende a viver em Babilônia sem deixar Babilônia governar sua consciência. Ele aprende língua, entende a cultura, mas estabelece limites diante de Deus.",
        "1 Timóteo 4 mostra que juventude não é desculpa para superficialidade. Paulo orienta Timóteo a ser padrão na palavra, no procedimento, no amor, na fé e na pureza. O jovem cristão não espera envelhecer para levar Deus a sério.",
      ],
      aplicação: [
        "Faça um inventário espiritual: quais conteúdos têm moldado seu senso de valor? Quais vozes estão ensinando você a desejar? Quais hábitos estão apagando sua fome pela Palavra?",
        "Aplique três filtros antes de consumir algo: isso alimenta minha fé? isso normaliza o pecado? isso me torna mais parecido com Cristo ou mais anestesiado espiritualmente?",
        "Organize seus relacionamentos em três grupos: pessoas que aproximam você de Cristo, pessoas que você precisa amar sem imitar, e pessoas que têm acesso demais ao seu coração sem compromisso com sua fé.",
        "Crie um plano de resistência espiritual para dias de fraqueza: texto bíblico, oração curta, pessoa confiável para chamar, lugar a evitar e prática concreta para redirecionar a mente.",
      ],
      prática: [
        "Escreva uma carta para seu eu do futuro descrevendo o tipo de cristão que você deseja ser em um ano.",
        "Crie uma cena curta sobre um jovem em conflito entre aprovação social e fidelidade a Cristo. O final deve apontar para graça, não para moralismo.",
        "Monte uma rotina de 21 dias: leitura de um capítulo, uma anotação, uma oração escrita e uma renúncia prática. A meta é consistência, não perfeccionismo.",
        "Escreva cinco perguntas que um jovem cristão faria em segredo e responda cada uma com Bíblia, empatia e verdade.",
      ],
    },
  },
  {
    id: "evangelho-centro",
    titulo: "Jesus, o centro do evangelho",
    categoria: "Fundamentos",
    duracao: "7 aulas densas",
    nivel: "Base da fé",
    topicos: ["encarnação", "cruz", "ressurreição", "senhorio", "graça", "arrependimento"],
    resumo: "Cristo como Filho de Deus, Verbo encarnado, Cordeiro, Senhor, Rei, mediador, Salvador e esperança final da Igreja.",
    abas: {
      visão: [
        "O evangelho não é autoajuda com versículos; é a boa notícia de que Deus tomou a iniciativa de salvar pecadores por meio da obra de Cristo. Jesus não é acessório da fé: Ele é o centro, o fundamento, o conteúdo e o destino da fé cristã.",
        "Quando Cristo sai do centro, a espiritualidade vira moralismo, emoção, ativismo ou espetáculo. Quando Cristo volta ao centro, a vida é reorganizada: pecado é tratado, dons são consagrados e a missão ganha direção.",
        "O evangelho responde à condição mais profunda do ser humano: culpa diante de Deus, escravidão do pecado, morte espiritual e incapacidade de salvar a si mesmo. Cristo não veio apenas melhorar pessoas; veio reconciliar pecadores com Deus.",
        "Uma fé centrada em Cristo não despreza obras, santidade ou missão. Ela coloca tudo no lugar certo: somos salvos pela graça, transformados pelo Espírito e enviados ao mundo como testemunhas.",
      ],
      bíblia: [
        "João 1 apresenta Jesus como o Verbo eterno que entra na história. Isso significa que a fé cristã não começa em uma ideia humana, mas na revelação de Deus em Cristo.",
        "1 Coríntios 15 mostra que a ressurreição não é detalhe doutrinário; ela sustenta a esperança, a missão e a certeza de que a morte foi vencida.",
        "Romanos 3–5 mostra a justiça de Deus, o pecado humano, a justificação pela fé e a paz com Deus por meio de Cristo. O evangelho não ignora a justiça; ele revela como Deus salva sem deixar de ser justo.",
        "Lucas 24 mostra Jesus interpretando a Escritura como testemunho de sua obra. Lei, Profetas e Salmos convergem para sofrimento, ressurreição e anúncio de arrependimento e perdão.",
      ],
      aplicação: [
        "Avalie seus projetos, sonhos e ministério: Cristo está no centro ou apenas abençoando sua agenda?",
        "Um estudo cristocêntrico transforma ambição em serviço, culpa em arrependimento, medo em esperança e arte em anúncio.",
        "Pergunte antes de qualquer decisão ministerial: isso anuncia Cristo ou apenas minha marca? Isso serve pessoas ou alimenta minha necessidade de reconhecimento?",
        "Voltar ao centro é uma prática diária: confessar pecados, receber graça, obedecer, amar pessoas difíceis e lembrar que a cruz confronta tanto o orgulho quanto o desespero.",
      ],
      prática: [
        "Monte um mapa visual com títulos de Cristo: Verbo, Cordeiro, Pastor, Rei, Salvador, Noivo, Juiz e Senhor.",
        "Escreva um monólogo de três minutos onde alguém percebe que estava servindo a Deus sem realmente olhar para Cristo.",
        "Prepare uma aula de 10 minutos explicando o evangelho sem jargões religiosos: criação, queda, Cristo, resposta e esperança.",
        "Escreva uma oração de rendição colocando seus dons, sua companhia, seus projetos e seu futuro debaixo do senhorio de Jesus.",
      ],
    },
  },
  {
    id: "teatro-evangelho",
    titulo: "Teatro, beleza e evangelho",
    categoria: "Arte e ministério",
    duracao: "12 aulas + laboratório",
    nivel: "Profundo",
    topicos: ["dramaturgia", "personagem", "símbolo", "adoração", "ética", "evangelização"],
    resumo: "Como criar cenas, monólogos, musicais e dramaturgia cristã sem perder fidelidade bíblica, excelência estética e sensibilidade pastoral.",
    abas: {
      visão: [
        "A arte cristã não precisa ser pobre para ser santa, nem vazia para ser bonita. A beleza pode servir à verdade quando o artista se submete ao Senhor, estuda a Palavra e respeita a inteligência espiritual do público.",
        "O palco pode iluminar conflitos humanos: culpa, medo, queda, orgulho, luto, desejo de redenção. Mas a cena precisa apontar para a luz de Cristo, não para a glorificação da dor.",
        "Teatro cristão não é apenas colocar versículos no diálogo. É compreender o drama da redenção: criação, ruptura, busca, sacrifício, reconciliação e esperança. Toda boa cena tem conflito; o evangelho revela o conflito mais profundo e a graça mais poderosa.",
        "A excelência artística também é testemunho. Figurino, ritmo, silêncio, luz, trilha, preparação corporal e texto precisam comunicar cuidado. A mensagem não deve ser usada como desculpa para descuido técnico.",
      ],
      bíblia: [
        "Êxodo mostra artistas cheios de habilidade para servir ao tabernáculo. A excelência técnica não é inimiga da espiritualidade quando nasce em obediência.",
        "Colossenses 3 ensina que tudo deve ser feito de coração para o Senhor. Isso inclui ensaio, roteiro, figurino, direção, produção e apresentação.",
        "Os profetas frequentemente usam imagens, atos simbólicos e linguagem poética. Isso mostra que Deus não se comunica apenas por abstrações; Ele usa símbolos, narrativas e gestos para confrontar e consolar seu povo.",
        "As parábolas de Jesus mostram como uma história simples pode carregar profundidade espiritual. Elas não manipulam; elas revelam o coração de quem escuta.",
      ],
      aplicação: [
        "Antes de criar uma obra, pergunte: qual verdade bíblica sustenta essa história? Qual ferida humana ela toca? Qual esperança em Cristo ela anuncia?",
        "Evite manipular emoção. A emoção pode abrir o coração, mas a verdade precisa conduzir a resposta.",
        "Construa personagens com humanidade. Um vilão raso gera moralismo; um pecador complexo ajuda o público a reconhecer a própria necessidade de graça.",
        "Não pregue contra o mundo com ódio. Mostre a dor da queda e a beleza da redenção. O público precisa sair confrontado, mas também chamado para a esperança.",
      ],
      prática: [
        "Escolha um personagem bíblico e escreva conflito, desejo, medo, queda, encontro com Deus e transformação.",
        "Crie uma cena sem pregação direta, mas com símbolo forte que conduza o público à reflexão espiritual.",
        "Monte uma ficha de cena com: tema bíblico, texto-base, imagem central, conflito, virada, frase final e aplicação pastoral.",
        "Reescreva uma cena sua retirando explicações óbvias e deixando o subtexto trabalhar. O público não precisa receber tudo mastigado; precisa ser conduzido com verdade.",
      ],
    },
  },
  {
    id: "apologetica",
    titulo: "Apologética para conversas difíceis",
    categoria: "Defesa da fé",
    duracao: "10 aulas",
    nivel: "Intermediário",
    topicos: ["razão", "fé", "sofrimento", "verdade", "evangelismo", "diálogo"],
    resumo: "Como responder com mansidão e firmeza a dúvidas sobre sofrimento, Bíblia, ciência, religião e hipocrisia cristã.",
    abas: {
      visão: [
        "Apologética não é vencer debates; é remover obstáculos para que a pessoa enxergue Cristo. O tom importa: uma resposta correta dada com arrogância pode trair o espírito do evangelho.",
        "O cristão precisa aprender a ouvir antes de responder. Muitas perguntas intelectuais escondem feridas espirituais; e muitas resistências contra Deus nasceram de decepções com pessoas religiosas.",
        "Defender a fé envolve mente e caráter. Uma vida incoerente pode enfraquecer uma resposta bem formulada. O apologista cristão precisa cultivar verdade, mansidão, paciência e coragem.",
        "Nem toda conversa precisa terminar em conclusão imediata. Algumas sementes são plantadas em uma resposta honesta, uma escuta respeitosa ou uma postura que mostra Cristo antes mesmo da explicação.",
      ],
      bíblia: [
        "1 Pedro 3 orienta a responder com mansidão e temor. A defesa da fé deve nascer de uma vida santificada e não de desejo de humilhar o outro.",
        "Atos mostra Paulo dialogando com judeus, gregos, filósofos e autoridades, adaptando a abordagem sem trocar o conteúdo do evangelho.",
        "Jó ajuda a tratar sofrimento sem respostas simplistas. Seus amigos falaram muito sobre Deus, mas nem sempre falaram corretamente. O sofrimento exige reverência, não frases prontas.",
        "João 20 mostra que a fé cristã está ligada a testemunho, sinais, ressurreição e chamado à confiança em Cristo. A fé bíblica não é salto no escuro; é resposta à revelação de Deus.",
      ],
      aplicação: [
        "Quando alguém fizer uma pergunta difícil, responda primeiro com curiosidade: 'o que te levou a pensar nisso?'",
        "Separe objeções reais de ataques emocionais. Às vezes a melhor defesa da fé é presença, escuta e testemunho coerente.",
        "Treine respostas curtas para temas recorrentes: sofrimento, exclusividade de Cristo, confiabilidade bíblica, sexualidade, hipocrisia religiosa e sentido da vida.",
        "Não tenha medo de dizer 'não sei'. Honestidade intelectual preserva confiança. Depois pesquise, ore, estude e volte com uma resposta melhor.",
      ],
      prática: [
        "Liste cinco perguntas que jovens fazem hoje sobre fé e escreva uma resposta bíblica, honesta e compassiva para cada uma.",
        "Treine uma resposta de um minuto sobre sofrimento, esperança e cruz de Cristo.",
        "Crie um quadro com três colunas: pergunta, dor por trás da pergunta, texto bíblico que ilumina o tema.",
        "Simule uma conversa difícil em formato de roteiro teatral, cuidando para que o cristão não pareça robótico, agressivo ou superior.",
      ],
    },
  },
  {
    id: "vida-secreta",
    titulo: "Vida secreta, oração e santidade",
    categoria: "Devocional",
    duracao: "14 dias",
    nivel: "Prático",
    topicos: ["oração", "jejum", "santidade", "disciplina", "arrependimento"],
    resumo: "Um caminho de reconstrução do secreto: oração, jejum, confissão, arrependimento, leitura bíblica, silêncio e obediência cotidiana.",
    abas: {
      visão: [
        "O secreto é o lugar onde Deus trata motivações. Sem secreto, o ministério vira vitrine; com secreto, até o trabalho invisível vira adoração.",
        "Santidade não é pose religiosa. É o processo pelo qual o Espírito nos conforma a Cristo, inclusive quando ninguém está olhando.",
        "A vida secreta sustenta a vida pública. Quem aparece muito e ora pouco corre o risco de confundir impacto com intimidade. O secreto devolve o coração para Deus.",
        "O objetivo não é criar culpa por não orar o suficiente, mas reconstruir fome. O Pai chama para o quarto não como fiscal, mas como Pai que vê em secreto.",
      ],
      bíblia: [
        "Mateus 6 confronta a espiritualidade performática: esmola, oração e jejum não devem ser teatro para aprovação humana.",
        "Salmos revela oração honesta: lamento, confissão, gratidão, adoração, medo, esperança e rendição diante de Deus.",
        "Lucas mostra Jesus se retirando para orar mesmo em meio a demandas intensas. Se o Filho buscava comunhão com o Pai, o discípulo não pode tratar oração como acessório.",
        "Tiago conecta oração, confissão, cura, perseverança e dependência de Deus. A oração cristã não é fuga da vida; é entrega da vida a Deus.",
      ],
      aplicação: [
        "Defina um horário simples e sustentável para oração e leitura. Consistência pequena é melhor que euforia grande e passageira.",
        "Ore antes de produzir. O ministério mais saudável é aquele que nasce da comunhão, não da pressa.",
        "Crie um ambiente de secreto: Bíblia, caderno, silêncio possível, celular longe e uma pergunta diária: Senhor, o que precisa ser tratado em mim?",
        "Não negocie santidade em nome de cansaço. O descanso verdadeiro não é anestesia no pecado; é retorno ao cuidado de Deus.",
      ],
      prática: [
        "Faça sete dias de oração escrita. Cada dia deve ter confissão, gratidão, pedido, escuta e compromisso prático.",
        "Crie uma cena silenciosa sobre alguém voltando ao quarto secreto depois de muito tempo.",
        "Monte uma liturgia pessoal de 20 minutos: adoração, leitura, silêncio, confissão, intercessão e entrega do dia.",
        "Escreva uma lista de distrações que roubam sua fome espiritual e estabeleça um limite prático para cada uma.",
      ],
    },
  },
  {
    id: "arrebatamento-esperanca",
    titulo: "Arrebatamento, vigilância e esperança cristã",
    categoria: "Escatologia",
    duracao: "21 módulos",
    nivel: "Avançado",
    topicos: ["volta de Cristo", "arrebatamento", "tribulação", "Noiva", "juízo", "eternidade"],
    resumo: "Um estudo organizado para tratar os últimos dias com base bíblica, temor, esperança e sem sensacionalismo.",
    abas: {
      visão: [
        "Escatologia não é mapa de curiosidade; é doutrina de esperança. O estudo dos últimos dias deve aumentar amor por Cristo, santidade, perseverança e compromisso missionário.",
        "O erro mais comum é colocar o Anticristo, a marca, datas e teorias no centro. O centro da escatologia cristã é Jesus: o Cordeiro vencedor, o Rei que vem, o Noivo da Igreja e o Juiz justo.",
        "A Igreja precisa aprender a viver entre promessa e cumprimento. A volta de Cristo não autoriza passividade, mas fidelidade ativa: trabalhar, evangelizar, vigiar, consolar e permanecer firme.",
      ],
      bíblia: [
        "João 14 apresenta a volta de Cristo como consolo. Atos 1 liga a ascensão à missão. 1 Tessalonicenses 4 fala de encontro e consolo. 1 Coríntios 15 fala de transformação e vitória sobre a morte.",
        "Mateus 24 chama à vigilância e discernimento. Apocalipse revela conflito, juízo, perseverança dos santos, vitória do Cordeiro e restauração final.",
        "Daniel, Zacarias, Ezequiel, 2 Tessalonicenses e Apocalipse precisam ser estudados com humildade, reconhecendo linguagem profética, apocalíptica e simbólica.",
      ],
      aplicação: [
        "Pergunte: meu estudo do fim me torna mais santo, mais amoroso, mais missionário e mais esperançoso? Se não, talvez eu esteja estudando do jeito errado.",
        "Vigilância não é paranoia. É fidelidade sóbria. É viver pronto para encontrar Cristo sem abandonar responsabilidades presentes.",
        "Prepare uma lista de práticas de espera: oração, serviço, evangelismo, santidade, generosidade, reconciliação e estudo bíblico responsável.",
      ],
      prática: [
        "Crie um quadro comparando pré-tribulacionismo, meso-tribulacionismo, pós-tribulacionismo, amilenismo, pré-milenismo e pós-milenismo com respeito e base bíblica.",
        "Escreva um devocional chamado 'A Noiva diz: Vem', ligando Apocalipse 22 à vida secreta e à santidade.",
        "Crie uma cena teatral com uma lâmpada, uma porta e uma voz chamando. O objetivo é gerar esperança, não medo.",
      ],
    },
  },
  {
    id: "familia-relacionamentos",
    titulo: "Família, namoro e relacionamentos à luz da Bíblia",
    categoria: "Vida prática",
    duracao: "11 aulas",
    nivel: "Atual",
    topicos: ["família", "namoro", "aliança", "perdão", "limites", "pureza"],
    resumo: "Um estudo sobre afetos, honra, maturidade emocional, limites e alianças sob o senhorio de Cristo.",
    abas: {
      visão: [
        "Relacionamentos revelam maturidade espiritual. Amar biblicamente não é ceder a tudo, controlar tudo ou romantizar sinais de imaturidade. É buscar verdade com graça e responsabilidade diante de Deus.",
        "A cultura atual muitas vezes transforma pessoas em experiências descartáveis. A Bíblia chama o discípulo a enxergar o outro como imagem de Deus, não como produto emocional.",
        "Família, amizade e namoro precisam ser tratados como espaços de formação. Eles podem curar, ferir, amadurecer ou expor idolatrias escondidas.",
      ],
      bíblia: [
        "Efésios 5–6 trata amor, honra, responsabilidade e serviço dentro da casa. O texto não autoriza abuso; ele chama todos ao temor de Cristo.",
        "1 Coríntios 13 descreve amor como caráter, não apenas sentimento. Paciência, bondade, verdade e perseverança revelam maturidade.",
        "Provérbios ensina sabedoria para escolhas, conselhos, palavras e caminhos. Relacionamentos saudáveis precisam de prudência, não apenas intensidade.",
      ],
      aplicação: [
        "Pergunte se seus afetos estão obedecendo a Cristo ou exigindo que Cristo apenas aprove seus desejos.",
        "Estabeleça limites que protejam santidade, clareza emocional, honra e responsabilidade. Limite não é falta de amor; muitas vezes é amor com sabedoria.",
        "Busque conselhos maduros antes de decisões importantes. Paixão isolada tende a justificar sinais que a sabedoria já percebeu.",
      ],
      prática: [
        "Escreva critérios bíblicos para relacionamento: fé, caráter, serviço, domínio próprio, maturidade, verdade, visão de futuro e respeito.",
        "Crie uma cena sobre alguém confundindo carência com amor e sendo confrontado pela graça de Deus.",
        "Faça uma oração entregando afetos, memórias, feridas e expectativas ao senhorio de Cristo.",
      ],
    },
  },
  {
    id: "ansiedade-fe",
    titulo: "Ansiedade, mente e descanso em Deus",
    categoria: "Cuidado da alma",
    duracao: "8 aulas",
    nivel: "Pastoral",
    topicos: ["ansiedade", "descanso", "oração", "mente", "confiança", "limites"],
    resumo: "Um caminho bíblico e pastoral para lidar com preocupações, excesso de controle, comparação e cansaço emocional.",
    abas: {
      visão: [
        "A Bíblia não trata a ansiedade com desprezo. Ela chama o coração cansado para Deus, mas também ensina práticas de confiança, oração, sabedoria e descanso.",
        "Ansiedade muitas vezes revela tentativa de carregar o futuro sozinho. A fé não elimina responsabilidades, mas ensina a entregá-las ao Pai que cuida.",
        "É importante tratar o tema com cuidado: há dimensões espirituais, emocionais, físicas e relacionais. O estudo bíblico não substitui ajuda profissional quando ela é necessária, mas oferece esperança e direção para a alma.",
      ],
      bíblia: [
        "Mateus 6 confronta a preocupação com a paternidade de Deus. Jesus não nega necessidades; Ele reposiciona o coração diante do Pai.",
        "Filipenses 4 une oração, gratidão, paz de Deus e disciplina da mente. O texto não promete ausência de problemas, mas guarda do coração em Cristo.",
        "Salmos mostra que o fiel pode derramar medo diante de Deus. Lamento não é incredulidade; pode ser oração honesta buscando refúgio.",
      ],
      aplicação: [
        "Liste suas preocupações e separe: o que é responsabilidade minha hoje? O que é futuro que preciso entregar? O que é medo sem evidência?",
        "Crie limites para consumo de notícias, redes sociais e comparações. Muitas ansiedades são alimentadas por excesso de estímulo e falta de silêncio.",
        "Ore com frases simples: Pai, eu recebo o cuidado de hoje. Eu entrego o amanhã. Eu obedeço no que está diante de mim.",
      ],
      prática: [
        "Faça uma oração escrita usando Filipenses 4: pedido, gratidão, entrega e pensamento verdadeiro.",
        "Crie uma cena teatral com uma pessoa tentando carregar malas invisíveis até ouvir o convite de Cristo ao descanso.",
        "Durante sete dias, anote uma preocupação e uma verdade bíblica que responde a ela.",
      ],
    },
  },
  {
    id: "doutrinas-base",
    titulo: "Doutrinas centrais da fé cristã",
    categoria: "Teologia",
    duracao: "16 aulas",
    nivel: "Formação",
    topicos: ["Bíblia", "Deus", "Cristo", "Espírito", "salvação", "Igreja", "fim"],
    resumo: "Um curso para organizar as principais doutrinas cristãs com base bíblica, clareza e aplicação devocional.",
    abas: {
      visão: [
        "Doutrina não é frieza espiritual. Doutrina é a fé pensando corretamente sobre Deus para adorá-lo melhor e viver com mais fidelidade.",
        "Muitos cristãos sofrem por falta de estrutura: conhecem frases, mas não sabem conectar Bíblia, salvação, Igreja, missão e esperança. Este estudo organiza fundamentos.",
        "A boa teologia produz humildade. Quanto mais o discípulo conhece a grandeza de Deus, menos espaço sobra para arrogância religiosa.",
      ],
      bíblia: [
        "2 Timóteo 3 fala da utilidade da Escritura para ensino, repreensão, correção e educação na justiça.",
        "Efésios 1 organiza salvação de forma trinitária: o Pai planeja, o Filho redime, o Espírito sela. Doutrina e adoração aparecem juntas.",
        "Hebreus apresenta Cristo como revelação superior, sacerdote perfeito e mediador da nova aliança.",
      ],
      aplicação: [
        "Monte uma ficha para cada doutrina: definição, textos principais, erro comum, aplicação para oração e impacto na vida prática.",
        "Use a doutrina para corrigir distorções: Deus não é amuleto, Jesus não é coach, Espírito Santo não é energia, Igreja não é plateia, graça não é licença para pecado.",
        "Ensine uma doutrina por vez para alguém, usando linguagem simples e exemplos do cotidiano.",
      ],
      prática: [
        "Crie um mapa doutrinário com sete blocos: Escritura, Deus, ser humano, Cristo, salvação, Igreja e esperança final.",
        "Escreva uma oração baseada em uma doutrina. Exemplo: se Deus é santo, confesse; se Deus é Pai, descanse; se Cristo é mediador, aproxime-se.",
        "Transforme uma doutrina em cena: um personagem vive uma mentira teológica e encontra libertação ao conhecer a verdade bíblica.",
      ],
    },
  },
];

const theologyModules = [
  { titulo: "Bibliologia", subtitulo: "Revelação, inspiração, autoridade, cânon e interpretação das Escrituras.", aulas: ["Revelação geral e especial", "Inspiração e suficiência", "Cânon bíblico", "Traduções e uso responsável", "Como aplicar sem distorcer"] },
  { titulo: "Hermenêutica", subtitulo: "Métodos de interpretação bíblica com responsabilidade, contexto e aplicação.", aulas: ["Observação, interpretação e aplicação", "Gêneros literários", "Contexto histórico", "Erros comuns", "Cristo como centro sem alegorizar tudo"] },
  { titulo: "Teologia Própria", subtitulo: "Existência, nomes, atributos, obras de Deus e Trindade.", aulas: ["Atributos de Deus", "Soberania e providência", "Trindade", "Deus e o mal", "Adoração e temor"] },
  { titulo: "Cristologia", subtitulo: "Pessoa e obra de Jesus: encarnação, cruz, ressurreição, ascensão e retorno.", aulas: ["Duas naturezas de Cristo", "Ofícios de Cristo", "Expiação", "Ressurreição", "Cristo como Rei vindouro"] },
  { titulo: "Pneumatologia", subtitulo: "Pessoa, dons, fruto, santificação e ação do Espírito Santo.", aulas: ["Quem é o Espírito Santo", "Dons e fruto", "Santificação", "Discernimento espiritual", "Vida cheia do Espírito"] },
  { titulo: "Soteriologia", subtitulo: "Salvação: graça, fé, arrependimento, justificação, regeneração e perseverança.", aulas: ["Chamado e conversão", "Justificação", "Adoção", "Santificação", "Perseverança"] },
  { titulo: "Eclesiologia", subtitulo: "Igreja, liderança, ordenanças, comunhão, disciplina e missão.", aulas: ["Natureza da Igreja", "Ceia e batismo", "Dons no corpo", "Missão local", "Igreja e cultura"] },
  { titulo: "Escatologia", subtitulo: "Volta de Cristo, arrebatamento, tribulação, milênio, juízo e nova criação.", aulas: ["Esperança cristã", "Linhas escatológicas", "Apocalipse", "Juízo", "Novo céu e nova terra"] },
  { titulo: "Homilética", subtitulo: "Preparação de mensagens, aulas, devocionais e ensino bíblico.", aulas: ["Texto e tema", "Estrutura", "Aplicação", "Pregação com reverência", "Ensino para jovens"] },
  { titulo: "História da Igreja", subtitulo: "Igreja primitiva, credos, concílios, reforma, missões e avivamentos.", aulas: ["Pais da Igreja", "Credos", "Reforma", "Missões", "Cristianismo no Brasil"] },
];

const raptureTopics = [
  {
    id: "promessa",
    titulo: "A promessa da volta de Cristo",
    resumo: "A esperança cristã não é escapismo; é fidelidade enquanto aguardamos o Rei.",
    base: ["João 14:1-3", "Atos 1:9-11", "Apocalipse 22:20"],
    conteudo: {
      fundamento: [
        "Jesus prometeu voltar. Essa promessa não é um detalhe emocional para momentos difíceis; ela é uma coluna da fé cristã. A Igreja vive entre a ascensão e o retorno, entre a missão recebida e a consumação esperada.",
        "A volta de Cristo corrige duas distorções: a acomodação, que vive como se Ele nunca fosse voltar, e o pânico, que vive como se a esperança fosse medo. O Novo Testamento usa a volta de Jesus para produzir sobriedade, consolo, santidade e perseverança.",
      ],
      denso: [
        "A escatologia bíblica precisa começar em Cristo, não em gráficos. O centro não é o Anticristo, a marca, a geopolítica ou a curiosidade sobre datas; o centro é o Rei que virá. Quando o foco sai de Cristo, a doutrina dos últimos dias vira ansiedade religiosa.",
        "João 14 apresenta a volta de Jesus como consolo para discípulos perturbados. Atos 1 conecta a volta com missão: os discípulos não deveriam ficar parados olhando para o céu, mas testemunhar no poder do Espírito. Apocalipse termina com clamor: 'Vem'. Esperança, missão e adoração caminham juntas.",
      ],
      aplicação: [
        "Viver aguardando Cristo significa organizar prioridades. Se Ele volta, a santidade importa. Se Ele volta, a missão importa. Se Ele volta, a dor presente não terá a última palavra.",
        "Pergunte: minha visão do fim me torna mais parecido com Jesus ou apenas mais curioso, ansioso e combativo?",
      ],
      perguntas: ["Como a volta de Cristo muda minhas decisões de hoje?", "Tenho estudado escatologia para amar mais Jesus ou para alimentar medo?"],
    },
  },
  {
    id: "arrebatamento",
    titulo: "Arrebatamento da Igreja",
    resumo: "Um estudo de 1 Tessalonicenses 4 e 1 Coríntios 15 sobre encontro, transformação e esperança.",
    base: ["1 Tessalonicenses 4:13-18", "1 Coríntios 15:50-58", "João 14:1-3"],
    conteudo: {
      fundamento: [
        "O arrebatamento aparece como consolo para a Igreja: os mortos em Cristo não foram esquecidos, os vivos não terão vantagem final sobre eles, e todos os que pertencem ao Senhor estarão com Ele.",
        "A linguagem de encontro com o Senhor deve ser lida com reverência, evitando transformar o texto em espetáculo vazio. Paulo termina dizendo: 'consolai-vos uns aos outros com estas palavras'.",
      ],
      denso: [
        "Existem leituras diferentes sobre o momento do arrebatamento em relação à tribulação: pré-tribulacionista, meso-tribulacionista, pós-tribulacionista e outras abordagens. Um app de estudo responsável pode apresentar essas linhas sem zombaria, mostrando textos usados, pontos fortes e dificuldades de cada visão.",
        "1 Coríntios 15 enfatiza transformação: corrupção revestida de incorruptibilidade, mortalidade revestida de imortalidade. O foco não é fuga covarde da história, mas vitória de Cristo sobre morte, pecado e corrupção.",
      ],
      aplicação: [
        "O arrebatamento deve gerar esperança e santidade. Quem aguarda o Senhor não vive dormindo espiritualmente, nem brincando com pecado, nem vendendo medo religioso.",
        "Marcar este módulo como lido no app deve representar uma decisão: estudar com humildade, vigiar com amor e servir até Ele vir.",
      ],
      perguntas: ["Como consolar alguém com a doutrina do arrebatamento sem causar medo?", "O que significa viver preparado sem viver paranoico?"],
    },
  },
  {
    id: "tribulacao",
    titulo: "Tribulação, perseverança e engano",
    resumo: "Como compreender sofrimento, apostasia, pressão espiritual e fidelidade sem sensacionalismo.",
    base: ["Mateus 24", "2 Tessalonicenses 2", "Apocalipse 13"],
    conteudo: {
      fundamento: [
        "Jesus alertou sobre falsos cristos, falsos profetas, esfriamento do amor e necessidade de perseverança. O propósito do alerta não é curiosidade, mas discernimento.",
        "A tribulação, em qualquer leitura escatológica, revela uma verdade espiritual: o povo de Deus precisa permanecer fiel quando a pressão aumenta.",
      ],
      denso: [
        "A Bíblia apresenta padrões de engano: idolatria, falsa paz, poder sem submissão a Deus, religiosidade sem verdade, sinais sem santidade e discursos que seduzem multidões. O cristão precisa discernir não só eventos futuros, mas espíritos já atuantes.",
        "O tema do Anticristo não deve ser reduzido a caça de nomes. O Novo Testamento fala também do espírito do anticristo: tudo aquilo que se opõe a Cristo, nega sua verdade ou ocupa o lugar que pertence ao Senhor.",
      ],
      aplicação: [
        "Discernimento começa hoje: não entregar a mente a qualquer narrativa, não confundir sucesso com unção, não confundir emoção com verdade.",
        "A resistência cristã não é ódio; é fidelidade. A Igreja testemunha com santidade, coragem, amor e verdade.",
      ],
      perguntas: ["Quais enganos já disputam minha fé hoje?", "Minha esperança está em Cristo ou na sensação de controle sobre o futuro?"],
    },
  },
  {
    id: "bodas",
    titulo: "Bodas do Cordeiro e a Noiva preparada",
    resumo: "A imagem da Noiva aponta para pureza, aliança, alegria e consumação do amor de Cristo pela Igreja.",
    base: ["Mateus 25", "Efésios 5", "Apocalipse 19"],
    conteudo: {
      fundamento: [
        "A Igreja é apresentada como Noiva. Isso fala de amor, aliança, espera, preparação e pertencimento. Escatologia não é apenas cronologia; é também casamento, comunhão e consumação.",
        "A parábola das dez virgens chama à vigilância. A questão não é aparência religiosa, mas preparo real para encontrar o Noivo.",
      ],
      denso: [
        "Efésios 5 conecta o amor de Cristo pela Igreja com purificação. A Noiva é amada e santificada. Isso impede duas distorções: medo sem amor e graça sem transformação.",
        "Apocalipse 19 celebra as bodas do Cordeiro no contexto da vitória de Deus. A esperança final não é apenas escapar da dor; é participar da alegria do Cordeiro.",
      ],
      aplicação: [
        "O artista cristão pode comunicar essa esperança com símbolos fortes: lâmpada, veste, mesa, porta, convite, espera e voz do Noivo.",
        "Preparação não é neurose religiosa; é amor que se organiza para receber quem ama.",
      ],
      perguntas: ["Minha vida revela espera pelo Noivo?", "O que em mim precisa ser preparado, purificado e reacendido?"],
    },
  },
  {
    id: "eternidade",
    titulo: "Juízo final, ressurreição e eternidade",
    resumo: "A justiça de Deus, a ressurreição, o julgamento e a esperança do novo céu e nova terra.",
    base: ["Apocalipse 20–22", "Romanos 8", "2 Pedro 3"],
    conteudo: {
      fundamento: [
        "A Bíblia caminha para restauração, não para abandono da criação. O fim cristão é novo céu e nova terra, Deus habitando com seu povo, lágrimas enxugadas e morte vencida.",
        "O juízo final afirma que a história tem responsabilidade moral. O mal não será romantizado, esquecido ou tratado como pequeno. Deus julgará com justiça.",
      ],
      denso: [
        "A ressurreição do corpo impede uma visão espiritualizada demais da eternidade. A esperança cristã não é virar sombra no céu, mas vida plena diante de Deus em criação restaurada.",
        "2 Pedro 3 conecta a esperança futura com vida santa no presente. Escatologia verdadeira sempre retorna para ética: que tipo de pessoa devemos ser?",
      ],
      aplicação: [
        "A eternidade relativiza vaidade e fortalece fidelidade. O que parece perda por amor a Cristo será visto à luz do Reino.",
        "A esperança final sustenta quem sofre: nenhuma lágrima em Cristo é invisível, e nenhuma injustiça terá a palavra final.",
      ],
      perguntas: ["Como a eternidade reorganiza minhas prioridades?", "O que estou construindo que permanecerá diante de Deus?"],
    },
  },
];

const characters = [
  { nome: "Jesus", papel: "Cristo, Salvador, Rei e centro das Escrituras", tags: ["Evangelho", "Redenção", "Reino"], texto: "Toda leitura bíblica converge para Cristo: promessa, cumprimento, cruz, ressurreição e esperança final. Estudar Jesus é estudar o coração da fé cristã.", palco: "Cena com silêncio, luz crescente e narração poética sobre o Verbo que entra na história." },
  { nome: "Adão", papel: "Primeiro homem e representante da humanidade", tags: ["Criação", "Queda"], texto: "Adão mostra vocação, responsabilidade e queda. Nele vemos a origem da ruptura; em Cristo, o último Adão, a restauração.", palco: "Monólogo de vergonha após a queda, contrastando esconderijo e chamado de Deus." },
  { nome: "Noé", papel: "Justiça em uma geração corrompida", tags: ["Juízo", "Aliança"], texto: "Noé ensina obediência quando o mundo zomba da fé. A arca aponta para juízo, salvação e recomeço.", palco: "Cena coral com sons de chuva, zombaria e perseverança silenciosa." },
  { nome: "Abraão", papel: "Pai da fé e homem da promessa", tags: ["Fé", "Aliança"], texto: "Abraão caminha sem possuir todas as respostas. Sua vida ensina confiança progressiva e obediência que amadurece no altar.", palco: "Cena entre promessa e esterilidade, olhando estrelas como linguagem visual." },
  { nome: "Sara", papel: "Mulher da promessa em meio à espera", tags: ["Espera", "Família"], texto: "Sara revela conflitos da espera, riso, incredulidade e surpresa diante da fidelidade de Deus.", palco: "Cena íntima no interior da tenda, entre riso e choro." },
  { nome: "José", papel: "Sonhador provado pela injustiça", tags: ["Perdão", "Providência"], texto: "José ensina que Deus trabalha mesmo quando a história parece quebrada. Traição, prisão e exaltação não anulam a providência.", palco: "Transição de túnica colorida para roupas de prisão e governo." },
  { nome: "Moisés", papel: "Libertador chamado no deserto", tags: ["Chamado", "Êxodo"], texto: "Moisés mostra que Deus usa gente insegura, mas obediente. O chamado nasce no fogo santo e se confirma no caminho.", palco: "Cena diante da sarça, com voz, medo e rendição." },
  { nome: "Rute", papel: "Lealdade, redenção e providência", tags: ["Família", "Redenção"], texto: "Rute revela amor leal e inclusão graciosa no plano messiânico. Uma estrangeira entra na história da redenção.", palco: "Cena no campo, colhendo espigas como sinal de esperança." },
  { nome: "Davi", papel: "Pastor, adorador, guerreiro e rei", tags: ["Adoração", "Quebrantamento"], texto: "Davi une coragem e fragilidade. Sua vida ensina adoração, arrependimento real e dependência da misericórdia.", palco: "Cena alternando harpa, funda, coroa e salmo de arrependimento." },
  { nome: "Ester", papel: "Rainha chamada para um tempo específico", tags: ["Propósito", "Coragem"], texto: "Ester mostra que posição também é responsabilidade. Seu silêncio inicial amadurece em intercessão corajosa.", palco: "Monólogo diante do espelho antes de entrar na presença do rei." },
  { nome: "Daniel", papel: "Fidelidade no exílio", tags: ["Santidade", "Profecia"], texto: "Daniel ensina integridade em cultura hostil, oração disciplinada e confiança na soberania de Deus sobre impérios.", palco: "Cena entre decreto do rei e janela aberta para oração." },
  { nome: "Maria", papel: "Serva escolhida para gerar o Messias", tags: ["Obediência", "Humildade"], texto: "Maria revela submissão reverente: 'cumpra-se em mim'. Ela responde ao impossível com fé humilde.", palco: "Cena da anunciação com luz suave e silêncio." },
  { nome: "João Batista", papel: "Voz que prepara o caminho", tags: ["Arrependimento", "Missão"], texto: "João Batista aponta para Cristo e diminui para que Jesus cresça. Sua grandeza está em não roubar o centro.", palco: "Cena no deserto com água, poeira e voz profética." },
  { nome: "Pedro", papel: "Discípulo impulsivo transformado em pastor", tags: ["Restauração", "Chamado"], texto: "Pedro mostra queda, choro e restauração. Jesus não apenas perdoa; Ele recoloca o discípulo no chamado.", palco: "Cena do olhar de Jesus após a negação e depois o reencontro à beira-mar." },
  { nome: "Paulo", papel: "Perseguidor alcançado pela graça", tags: ["Graça", "Missão"], texto: "Paulo encarna transformação radical: de perseguidor a apóstolo. Sua teologia nasce do encontro com o Cristo ressurreto.", palco: "Cena da estrada de Damasco com queda, luz e silêncio." },
  { nome: "João", papel: "Discípulo amado e testemunha do Apocalipse", tags: ["Amor", "Revelação"], texto: "João une intimidade, teologia profunda e esperança escatológica. Ele mostra Cristo como Verbo, Cordeiro e Rei vindouro.", palco: "Cena em Patmos, exílio transformado em visão." },
  { nome: "Maria Madalena", papel: "Testemunha da ressurreição", tags: ["Restauração", "Testemunho"], texto: "Maria Madalena revela devoção e anúncio: quem foi alcançado pela graça corre para dizer que Ele vive.", palco: "Cena ao amanhecer no jardim, do choro ao reconhecimento da voz." },
];

const questions = [
  {
    pergunta: "Por que Jesus precisa permanecer no centro de todo estudo bíblico?",
    opcoes: ["Porque Ele é apenas um símbolo moral", "Porque a Escritura aponta para sua pessoa e obra", "Porque substitui a necessidade de interpretar textos", "Porque emoção é mais importante que doutrina"],
    correta: 1,
    comentario: "O estudo bíblico cristão lê criação, queda, promessa, lei, profetas, evangelhos, epístolas e consumação à luz da obra de Cristo, sem forçar textos, mas reconhecendo o fio redentivo.",
  },
  {
    pergunta: "Qual é o maior risco de estudar escatologia sem maturidade bíblica?",
    opcoes: ["Ficar esperançoso", "Orar mais", "Cair em sensacionalismo e medo", "Ler Apocalipse com reverência"],
    correta: 2,
    comentario: "Escatologia deve produzir esperança, santidade e missão. Quando produz pânico, especulação vazia e arrogância, perdeu o foco em Cristo.",
  },
  {
    pergunta: "Como a arte cristã deve servir ao evangelho?",
    opcoes: ["Manipulando emoção", "Substituindo a Bíblia", "Unindo beleza, verdade e serviço", "Buscando fama religiosa"],
    correta: 2,
    comentario: "A arte pode comover, ensinar e abrir caminhos de reflexão, mas precisa permanecer submissa à verdade bíblica e ao caráter de Cristo.",
  },
];

function createLessonContent(plan, reading) {
  const themeName = reading.tema || plan.foco;
  const joinedPassages = reading.passagens.join(" • ");
  const planTone = plan.categoria.toLowerCase();
  const isEschatology = plan.id.includes("arrebatamento") || planTone.includes("escatologia");
  const isArt = plan.id.includes("artes") || planTone.includes("arte");
  const isCharacter = plan.id.includes("personagens") || planTone.includes("personagens");
  const isTheology = plan.id.includes("teologia") || planTone.includes("curso");
  const isPrayer = plan.id.includes("oracao") || planTone.includes("devocional");
  const isApologetics = plan.id.includes("apologetica") || planTone.includes("defesa");
  const isYouth = plan.id.includes("jovem") || planTone.includes("vida atual");
  const isProphetic = plan.id.includes("profetas") || planTone.includes("profetas");

  const emphasis = isEschatology
    ? "esperança escatológica, vigilância espiritual e fidelidade da Igreja enquanto aguarda a volta de Cristo"
    : isArt
    ? "vocação artística, excelência, reverência, sensibilidade pastoral e comunicação do evangelho por meio da beleza"
    : isTheology
    ? "doutrina, interpretação bíblica, formação teológica e aplicação prática para uma fé madura"
    : isPrayer
    ? "vida secreta, oração perseverante, santidade cotidiana e reconstrução da intimidade com Deus"
    : isApologetics
    ? "defesa da fé com mansidão, escuta, razão, Escritura e compaixão por quem tem dúvidas reais"
    : isYouth
    ? "discernimento para o tempo atual, identidade em Cristo, pureza, mente renovada e resistência à confusão cultural"
    : isProphetic
    ? "voz profética, santidade, justiça, juízo, consolo, arrependimento e esperança messiânica"
    : isCharacter
    ? "história bíblica, formação de caráter, queda, chamado, restauração e aplicação dramática"
    : "leitura bíblica, formação espiritual, obediência e crescimento no conhecimento de Deus";

  return {
    titulo: `${reading.titulo} — ${themeName}`,
    subtitulo: `${plan.titulo} • ${joinedPassages}`,
    tabs: {
      história: [
        `Este módulo parte de ${joinedPassages} para observar a narrativa bíblica com calma: quem está falando, para quem, em qual momento da história da redenção e qual conflito espiritual aparece no texto. O objetivo não é apenas cumprir leitura, mas enxergar Deus agindo dentro da história.`,
        `O tema de ${themeName} precisa ser lido dentro do grande arco bíblico: criação, queda, promessa, aliança, redenção em Cristo, formação da Igreja e consumação final. Quando um texto é arrancado desse caminho, ele vira frase solta; quando é lido dentro da história da redenção, ele ganha profundidade, direção e reverência.`,
        isCharacter
          ? "Quando estudamos personagens bíblicos, não buscamos heróis perfeitos. Observamos seres humanos reais diante de Deus: chamados, quedas, medos, decisões, arrependimento, fé e consequências. A história se torna espelho para discernir o coração."
          : "A leitura bíblica precisa respeitar o contexto antes de correr para a aplicação. Primeiro vemos o que o texto diz, depois o que significou para seus primeiros ouvintes, e então como ele ilumina a vida cristã hoje.",
        `Pergunte: qual tensão move esse trecho? Há promessa sendo aguardada? Há pecado sendo confrontado? Há fé sendo provada? Há povo sendo formado? Há esperança apontando para Cristo? Essas perguntas impedem uma leitura rasa e ajudam o módulo a virar estudo de verdade.`,
      ],
      bíblia: [
        `Base bíblica principal: ${joinedPassages}. Leia primeiro sem pressa, depois destaque verbos, repetições, promessas, advertências, personagens e sinais da graça de Deus.`,
        `Observe também as conexões bíblicas: como esse tema aparece antes e depois? A Bíblia interpreta a própria Bíblia. Um texto sobre ${themeName} pode dialogar com Lei, Profetas, Evangelhos, Epístolas e Apocalipse, mostrando continuidade entre doutrina e vida.`,
        isEschatology
          ? "Em temas escatológicos, a Bíblia deve conduzir a esperança, não a especulação. A volta de Cristo, a ressurreição, a perseverança e o juízo aparecem nas Escrituras para produzir santidade, consolo e missão."
          : isTheology
          ? "Em temas teológicos, procure separar doutrina bíblica de opinião solta. Uma doutrina saudável nasce do conjunto das Escrituras, respeita o texto e produz adoração, humildade e obediência."
          : "Pergunte ao texto: o que ele revela sobre Deus? O que mostra sobre o ser humano? Onde aparece pecado, promessa, juízo, graça, aliança, redenção ou chamado?",
        "Uma leitura madura procura três camadas: o sentido original, a conexão com Cristo e a obediência concreta. Sem o sentido original, viramos donos do texto. Sem Cristo, viramos moralistas. Sem obediência, viramos apenas acumuladores de informação religiosa.",
      ],
      explicação: [
        `O tema de hoje é ${themeName}. Ele deve ser estudado como parte de uma formação espiritual, não como informação isolada. Um bom estudo bíblico une observação, interpretação, aplicação e oração.`,
        `Neste módulo, o foco é ${emphasis}. Isso significa que o conteúdo precisa tocar a mente, o coração e a prática. A mente recebe doutrina; o coração é confrontado e consolado; a prática transforma a forma de decidir, falar, criar, servir e resistir ao pecado.`,
        isArt
          ? "Para quem serve a Deus com teatro e artes, este módulo ajuda a transformar conteúdo bíblico em linguagem sensível, sem diluir a verdade. A arte pode abrir o coração, mas a Palavra precisa governar a mensagem."
          : "O ponto central é deixar o texto confrontar, consolar e formar o coração. A Bíblia não foi dada apenas para curiosidade religiosa, mas para gerar fé, arrependimento, perseverança e amor por Deus.",
        isEschatology
          ? "Em escatologia, maturidade é tão importante quanto informação. O discípulo não estuda a volta de Cristo para se sentir superior, mas para vigiar, consolar, evangelizar e permanecer fiel. O estudo precisa terminar em oração: vem, Senhor Jesus, e prepara minha vida para esse encontro."
          : isYouth
          ? "Para o jovem cristão, a grande batalha nem sempre aparece como perseguição aberta. Muitas vezes vem em forma de distração, erotização, comparação, ansiedade, cinismo, relativização do pecado e perda de fome espiritual. A Palavra reorganiza desejos e devolve lucidez."
          : isPrayer
          ? "A vida secreta não é fuga da responsabilidade pública; é a raiz que sustenta tudo que aparece. Sem secreto, o serviço vira performance. Com secreto, até uma pequena obediência se torna altar diante de Deus."
          : "O amadurecimento espiritual acontece quando a verdade deixa de ser apenas assunto estudado e passa a governar desejos, decisões e relações. Esse é o caminho entre conhecimento e sabedoria.",
      ],
      aplicação: [
        "Escreva três respostas: o que Deus está revelando? O que em mim precisa ser corrigido? Como isso muda minha forma de viver, falar, escolher, criar e servir?",
        `Aplique ${themeName} em quatro áreas: vida secreta, relacionamentos, vocação e testemunho público. Uma verdade bíblica que não alcança nenhuma dessas áreas provavelmente ainda está apenas no nível da informação.`,
        isApologetics
          ? "Ao conversar com alguém, não transforme o estudo em arma. Pergunte, escute, reconheça dores reais e responda com firmeza humilde. A defesa da fé precisa carregar o cheiro de Cristo."
          : isArt
          ? "Ao criar uma cena, música, dança ou texto teatral, pergunte se a estética está servindo à verdade ou tentando compensar falta de conteúdo bíblico. Beleza e verdade precisam caminhar juntas."
          : "Antes de marcar como lido, transforme a leitura em uma decisão concreta: pedir perdão, abandonar um hábito, reorganizar uma prioridade, retomar a oração, estudar mais um texto ou servir alguém.",
        "A aplicação não precisa ser grandiosa; precisa ser obediente. Às vezes a resposta mais espiritual é uma conversa sincera, um pedido de perdão, um limite, uma renúncia ou dez minutos reais de oração sem celular.",
      ],
      prática: [
        isArt
          ? "Crie uma cena de dois minutos baseada no conflito espiritual do texto. A cena precisa ter desejo, obstáculo, escolha e uma imagem final que aponte para Cristo."
          : "Faça uma anotação no caderno do app com uma frase-resumo, uma pergunta honesta e uma oração baseada no texto.",
        `Monte um pequeno roteiro de estudo: título do módulo, texto-base, ideia central, três observações, uma conexão com Cristo, uma aplicação para 2026 e uma oração final. Isso transforma ${themeName} em conteúdo ensinável.`,
        "Crie uma pergunta de revisão com quatro alternativas e uma resposta comentada. A resposta comentada precisa explicar por que a correta é correta e por que as outras opções confundem.",
        "Depois, volte ao plano e marque o módulo como lido. O progresso deve representar caminhada real, não apenas clique.",
      ],
    },
  };
}

const characterStudyData = {
  Jesus: {
    base: ["João 1", "Marcos 1", "Lucas 4", "João 19–20", "Apocalipse 19"],
    história: [
      "Jesus é o centro da fé cristã e o cumprimento das promessas de Deus. Os evangelhos apresentam sua encarnação, seu anúncio do Reino, seus milagres, sua compaixão pelos quebrados, sua autoridade sobre pecado e morte, sua crucificação e sua ressurreição.",
      "Ele não é apenas mestre moral: é o Cristo, o Filho de Deus, o Cordeiro que tira o pecado do mundo, o Rei que inaugura o Reino e o Noivo que virá buscar sua Igreja.",
    ],
    contexto: [
      "Jesus viveu em contexto judaico do primeiro século, sob domínio romano, em meio a expectativas messiânicas diversas. Alguns esperavam libertação política imediata; Cristo revelou um Reino que começa no coração, confronta o pecado e culmina na restauração final.",
      "Suas ações unem verdade e misericórdia: Ele toca leprosos, recebe pecadores arrependidos, confronta religiosos hipócritas, chama discípulos comuns e caminha rumo à cruz voluntariamente.",
    ],
    lições: ["Cristo precisa ser o centro da doutrina, da arte, da missão e da identidade.", "Graça não é licença para pecar; é poder de reconciliação e nova vida.", "A cruz revela a gravidade do pecado e a profundidade do amor de Deus."],
    teatro: ["Uma cena forte pode alternar multidão, silêncio e cruz: todos falam sobre Jesus, mas só alguns realmente o enxergam.", "Use luz, pausa e olhar para mostrar autoridade sem caricatura. Cristo não precisa ser representado com grito; sua força pode aparecer em mansidão e verdade."],
  },
  Abraão: {
    base: ["Gênesis 12", "Gênesis 15", "Gênesis 17", "Gênesis 22", "Romanos 4"],
    história: ["Abraão é chamado a sair de sua terra sem receber todos os detalhes do caminho. Sua história é marcada por promessa, espera, falhas humanas e fidelidade divina.", "Ele aprende que a promessa não depende da força da carne, mas da aliança de Deus. Mesmo quando a espera parece impossível, Deus sustenta sua palavra."],
    contexto: ["A narrativa de Abraão inaugura uma etapa central da história bíblica: por meio de sua descendência, todas as famílias da terra seriam abençoadas.", "A vida de Abraão mostra tensão entre fé e controle. Ele crê, mas também tenta resolver pela própria estratégia. Isso torna sua história profundamente humana."],
    lições: ["Fé bíblica não é ausência de perguntas, mas obediência diante da promessa.", "A espera revela onde colocamos nossa confiança.", "O altar de Gênesis 22 aponta para entrega total e antecipa o tema do sacrifício providenciado por Deus."],
    teatro: ["Cena: Abraão observando estrelas enquanto luta contra o silêncio da espera.", "Cena: o caminho até Moriá, com poucas palavras e muito peso corporal, explorando obediência, amor e temor."],
  },
  Sara: {
    base: ["Gênesis 16", "Gênesis 18", "Gênesis 21", "Hebreus 11:11"],
    história: ["Sara vive a dor da espera e da esterilidade dentro de uma promessa que parecia grande demais para seu corpo envelhecido. Seu riso revela incredulidade, cansaço e surpresa diante do impossível.", "Deus não ignora Sara. Ele a inclui na promessa, visita sua casa e transforma riso de dúvida em riso de cumprimento."],
    contexto: ["Em seu mundo, a esterilidade carregava peso social e familiar profundo. A promessa de um filho envolvia identidade, futuro e honra.", "A tentativa de controlar a promessa por meio de Agar revela como a ansiedade pode gerar decisões que ferem pessoas."],
    lições: ["Deus não depende do tempo biológico para cumprir sua palavra.", "A espera precisa ser tratada diante de Deus para não virar manipulação.", "O riso pode ser curado quando a promessa encontra cumprimento."],
    teatro: ["Cena íntima dentro da tenda: Sara escuta a promessa do lado de fora, ri, tenta esconder o riso e depois encara a pergunta de Deus.", "Use objetos simples: tecido, água, berço vazio e luz quente para mostrar espera."],
  },
  José: {
    base: ["Gênesis 37", "Gênesis 39–41", "Gênesis 45", "Gênesis 50:20"],
    história: ["José passa da casa do pai para o poço, do poço para a escravidão, da fidelidade para a prisão e da prisão para o governo. Sua trajetória mostra sofrimento injusto e providência divina.", "A reconciliação com os irmãos revela maturidade: José não nega o mal que fizeram, mas reconhece que Deus conduziu a história para preservação de vida."],
    contexto: ["A história se move entre família, Egito, fome e preservação da linhagem da promessa.", "José não é exemplo de vida sem dor; é testemunha de fidelidade em ambientes onde ele poderia ter se corrompido."],
    lições: ["Integridade é testada quando ninguém conhecido está vendo.", "Perdão bíblico não chama o mal de bem, mas entrega a história à soberania de Deus.", "O sofrimento não anula o chamado quando Deus continua governando."],
    teatro: ["Cena com troca de figurinos: túnica, roupa de escravo, roupa de prisão e veste de autoridade.", "O reencontro com os irmãos pode ser construído com silêncio longo antes da revelação: 'Eu sou José'."],
  },
  Moisés: {
    base: ["Êxodo 2–4", "Êxodo 12", "Êxodo 14", "Deuteronômio 34"],
    história: ["Moisés nasce sob ameaça, é preservado nas águas, cresce no Egito, foge para o deserto e encontra Deus na sarça ardente. Seu chamado nasce no fogo e se desenvolve na obediência difícil.", "Ele lidera um povo liberto do Egito, mas ainda escravo de mentalidade. Sua jornada revela que sair do cativeiro é diferente de aprender a confiar em Deus."],
    contexto: ["O Êxodo é uma das grandes narrativas de redenção da Bíblia: escravidão, juízo, cordeiro, sangue, libertação, travessia e aliança.", "Moisés também mostra limites humanos: cansaço, intercessão, frustração e necessidade de depender de Deus."],
    lições: ["Chamado não elimina insegurança, mas exige obediência.", "Libertação externa precisa ser acompanhada de transformação interna.", "Deus ouve o clamor do seu povo e age no tempo certo."],
    teatro: ["A sarça ardente pode ser feita com luz, tecido e som, evitando exagero e valorizando reverência.", "Uma cena forte é Moisés discutindo com Deus suas limitações enquanto o cajado permanece no chão."],
  },
  Rute: {
    base: ["Rute 1–4", "Mateus 1:5"],
    história: ["Rute é estrangeira, viúva e vulnerável. Sua decisão de permanecer com Noemi revela amor leal e fé que atravessa perda, deslocamento e incerteza.", "Sua história termina em redenção familiar e inclusão na genealogia messiânica, mostrando a graça de Deus alcançando quem parecia estar à margem."],
    contexto: ["A narrativa acontece no período dos juízes, tempo de instabilidade moral e espiritual.", "O resgatador em Rute aponta para o tema bíblico da redenção: alguém com direito, disposição e capacidade de restaurar o perdido."],
    lições: ["Fidelidade em pequenas escolhas pode participar de uma grande história de redenção.", "Deus trabalha também em campos comuns, rotinas simples e encontros aparentemente ordinários.", "A graça inclui estrangeiros e vulneráveis."],
    teatro: ["Cena no campo: Rute colhe espigas enquanto narra perdas e esperança.", "Use o contraste entre vazio de Moabe e abundância em Belém para criar arco visual."],
  },
  Davi: {
    base: ["1 Samuel 16–17", "2 Samuel 11–12", "Salmo 51", "Atos 13:22"],
    história: ["Davi é pastor, músico, guerreiro e rei. Sua vida une coragem e queda, adoração e pecado, liderança e quebrantamento.", "Ele vence Golias confiando no nome do Senhor, mas também cai gravemente com Bate-Seba e Urias. Sua grandeza não está em nunca pecar, mas em responder ao confronto com arrependimento real."],
    contexto: ["Davi inaugura uma esperança real ligada à promessa messiânica. A aliança davídica aponta para um Rei futuro perfeito.", "Seus salmos revelam espiritualidade profunda: louvor, lamento, confissão, medo, confiança e desejo pela presença de Deus."],
    lições: ["Dom e unção não substituem caráter.", "Arrependimento verdadeiro não se defende; se rende.", "A adoração bíblica nasce de um coração que conhece graça e temor."],
    teatro: ["Cena alternando harpa e coroa: o mesmo homem que adora precisa ser confrontado.", "Golias não precisa aparecer grande fisicamente; pode ser voz, sombra e pressão ao redor."],
  },
  Ester: {
    base: ["Ester 2–5", "Ester 7", "Ester 9"],
    história: ["Ester se torna rainha em um contexto de exílio e ameaça ao seu povo. Sua posição não é apenas privilégio; torna-se responsabilidade.", "A frase 'para um tempo como este' resume a virada de sua consciência: o lugar onde ela está pode ser instrumento de livramento."],
    contexto: ["O livro de Ester mostra a providência de Deus mesmo quando seu nome não aparece explicitamente no texto.", "A narrativa trabalha silêncio, risco, estratégia, jejum, coragem e reversão de destino."],
    lições: ["Influência sem coragem vira autopreservação.", "Há momentos em que o silêncio custa mais caro que o risco.", "Deus pode agir nos bastidores da história."],
    teatro: ["Monólogo diante do espelho antes de entrar na presença do rei.", "O banquete pode ser encenado com tensão crescente, usando pausas e olhares em vez de muita movimentação."],
  },
  Daniel: {
    base: ["Daniel 1", "Daniel 3", "Daniel 6", "Daniel 7"],
    história: ["Daniel vive no exílio, em uma cultura que tenta reeducar sua identidade. Mesmo assim, ele preserva fidelidade, sabedoria e vida de oração.", "Sua história mostra integridade pública e devoção secreta. A janela aberta para oração revela que sua fidelidade não era performance."],
    contexto: ["Daniel mistura narrativa e visão apocalíptica. Impérios sobem e caem, mas Deus permanece soberano.", "A pressão cultural não aparece apenas por perseguição direta, mas por assimilação: novo nome, nova língua, nova mesa e nova lealdade."],
    lições: ["Santidade começa em decisões aparentemente pequenas.", "Oração constante prepara o coração antes da crise.", "Deus governa acima de impérios, decretos e fornalhas."],
    teatro: ["Cena da janela aberta: Daniel sabe do decreto, mas mantém o ritmo de oração.", "A cova dos leões pode ser sugerida por som, sombra e respiração, sem literalismo excessivo."],
  },
  Maria: {
    base: ["Lucas 1–2", "João 2", "João 19:25-27", "Atos 1:14"],
    história: ["Maria recebe uma palavra impossível e responde com submissão: 'cumpra-se em mim'. Sua fé passa por anúncio, gravidez, incompreensão, dor e perseverança.", "Ela não é apenas figura de cena natalina; é discípula que guarda palavras no coração e permanece próxima da história de Cristo até a cruz e a comunidade de oração."],
    contexto: ["Maria vive em humildade social, dentro de uma pequena vila, e recebe uma vocação que altera sua vida inteira.", "A encarnação passa pelo corpo, pela obediência e pela disponibilidade de uma jovem serva."],
    lições: ["Disponibilidade diante de Deus pode custar reputação e conforto.", "Guardar a Palavra no coração é parte da maturidade espiritual.", "A fé também permanece quando a promessa passa pela dor."],
    teatro: ["Cena da anunciação com silêncio e respiração, evitando pressa.", "Uma cena forte é Maria aos pés da cruz, lembrando a promessa enquanto encara a espada na alma."],
  },
  Pedro: {
    base: ["Lucas 5", "Mateus 16", "Lucas 22", "João 21", "Atos 2"],
    história: ["Pedro é impulsivo, intenso e contraditório. Confessa Cristo, tenta controlar o caminho da cruz, promete fidelidade e depois nega o Senhor.", "O encontro de João 21 revela restauração: Jesus trata a ferida da negação e recoloca Pedro no serviço: 'apascenta minhas ovelhas'."],
    contexto: ["Pedro representa o discípulo em formação: chamado, queda, choro, restauração e missão.", "Em Atos, o mesmo homem que negou por medo se levanta para anunciar Cristo com ousadia pelo poder do Espírito."],
    lições: ["Fracasso não precisa ser fim quando Cristo restaura.", "Amor por Jesus precisa amadurecer em pastoreio de pessoas.", "O Espírito transforma covardia em testemunho."],
    teatro: ["Cena do galo: Pedro percebe o olhar de Jesus e desaba sem precisar explicar demais.", "Cena à beira-mar: três perguntas, três memórias, uma restauração."],
  },
  Paulo: {
    base: ["Atos 9", "Atos 17", "Romanos 1", "Filipenses 3", "2 Timóteo 4"],
    história: ["Paulo passa de perseguidor da Igreja a apóstolo de Cristo. Sua conversão não é mudança de opinião religiosa; é encontro com o Ressuscitado.", "Sua vida depois disso é marcada por missão, sofrimento, plantação de igrejas, ensino doutrinário e paixão por anunciar Cristo entre judeus e gentios."],
    contexto: ["Paulo transita entre mundos: judaico, greco-romano, sinagoga, praça pública, prisão e tribunais.", "Suas cartas formam parte essencial da teologia cristã sobre graça, fé, justificação, Igreja, dons, santidade e esperança."],
    lições: ["Ninguém está longe demais para ser alcançado pela graça.", "Conhecimento sem Cristo pode virar zelo destrutivo.", "Missão verdadeira suporta custo porque viu valor supremo em Jesus."],
    teatro: ["A estrada de Damasco pode ser construída com luz súbita, queda e vozes ao redor.", "Uma cena de prisão pode mostrar Paulo escrevendo esperança enquanto está limitado fisicamente."],
  },
};

function getCharacterStudy(character) {
  return characterStudyData[character.nome] || {
    base: ["Texto bíblico relacionado", "História da redenção", "Aplicação cristã"],
    história: [character.texto, "Este personagem deve ser lido dentro do fluxo bíblico: criação, queda, promessa, redenção e esperança. O estudo não busca idolatrar pessoas, mas observar como Deus age por meio de vidas frágeis."],
    contexto: ["Observe família, época, conflito, decisões e consequências. Pergunte como essa história revela pecado humano, fidelidade divina e necessidade de Cristo."],
    lições: ["Deus trabalha com pessoas reais, não personagens perfeitos.", "Toda história bíblica deve conduzir a temor, fé, arrependimento e esperança."],
    teatro: [character.palco, "Construa a cena a partir de conflito interno, escolha moral e encontro com Deus."],
  };
}

const themes = {
  noite: {
    nome: "Noite Bíblia",
    bg: "bg-[#090909]",
    card: "bg-[#151517]",
    cardSoft: "bg-[#1d1d1f]",
    text: "text-white",
    muted: "text-zinc-400",
    ring: "ring-white/5",
    nav: "bg-[#111113]/90",
  },
  pergaminho: {
    nome: "Pergaminho",
    bg: "bg-[#f3ead7]",
    card: "bg-[#fff8ea]",
    cardSoft: "bg-[#eadcc4]",
    text: "text-zinc-950",
    muted: "text-stone-600",
    ring: "ring-stone-300/70",
    nav: "bg-[#fff8ea]/90",
  },
  azul: {
    nome: "Azul Profundo",
    bg: "bg-[#06111f]",
    card: "bg-[#0d1b2e]",
    cardSoft: "bg-[#132743]",
    text: "text-white",
    muted: "text-blue-200/70",
    ring: "ring-blue-200/10",
    nav: "bg-[#0d1b2e]/90",
  },
};

const accents = {
  rose: { nome: "Rosa", solid: "bg-rose-500", text: "text-rose-400", gradient: "from-rose-500 to-orange-500" },
  amber: { nome: "Dourado", solid: "bg-amber-500", text: "text-amber-400", gradient: "from-amber-400 to-orange-600" },
  emerald: { nome: "Verde", solid: "bg-emerald-500", text: "text-emerald-400", gradient: "from-emerald-400 to-cyan-600" },
  violet: { nome: "Roxo", solid: "bg-violet-500", text: "text-violet-400", gradient: "from-violet-500 to-fuchsia-600" },
};

const homeIcons = { cruz: Cross, casa: Home, chama: Flame, biblia: BookOpen, teatro: Theater };

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function readStorage(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
  }
}

function ProgressBar({ value, accent }) {
  const safeValue = Math.min(100, Math.max(0, Number(value) || 0));
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <div className={cn("h-full rounded-full", accent.solid)} style={{ width: `${safeValue}%` }} />
    </div>
  );
}

function MiniStars({ accent }) {
  return (
    <div className={cn("mt-1 flex gap-1", accent.text)}>
      {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-3.5 w-3.5 fill-current" />)}
    </div>
  );
}

function TopBar({ title, subtitle, showBack = false, onBack, right, theme }) {
  return (
    <div className={cn("sticky top-0 z-30 -mx-4 mb-5 border-b border-white/5 px-4 pb-4 pt-4 backdrop-blur-xl md:-mx-8 md:px-8", theme.bg, theme.text)}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          {showBack ? <button type="button" onClick={onBack} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><ArrowLeft className="h-6 w-6" /></button> : null}
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-black tracking-tight md:text-4xl">{title}</h1>
            {subtitle ? <p className={cn("mt-1 truncate text-sm font-semibold", theme.muted)}>{subtitle}</p> : null}
          </div>
        </div>
        {right || <button type="button" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><Search className="h-6 w-6" /></button>}
      </div>
    </div>
  );
}

function SectionHeader({ title, action, onAction, theme }) {
  return (
    <div className="mb-4 mt-8 flex items-center justify-between gap-4">
      <h2 className={cn("text-2xl font-black tracking-tight md:text-3xl", theme.text)}>{title}</h2>
      {action ? <button type="button" onClick={onAction} className={cn("flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold hover:bg-white/10", theme.muted)}>{action} <ChevronRight className="h-5 w-5" /></button> : null}
    </div>
  );
}

function PlanCover({ plan, large = false }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-gradient-to-br p-4 shadow-2xl", plan.cor, large ? "h-56 md:h-72" : "h-24 w-24 shrink-0")}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.5),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.35),transparent_45%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <Cross className={cn("text-white/90", large ? "h-10 w-10" : "h-6 w-6")} />
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">{plan.categoria}</p>
          <p className={cn("font-black leading-tight text-white", large ? "text-4xl md:text-5xl" : "text-sm")}>{plan.titulo}</p>
        </div>
      </div>
    </div>
  );
}

function HomeView({ setAba, openPlan, theme, accent }) {
  const { devotional, label } = getDailyDevotional();
  const spotifyUrl = getSpotifySearchUrl(devotional.musica);
  const greeting = getGreeting();

  return (
    <div>
      <TopBar theme={theme} title={`${greeting}, Eduardo`} subtitle="Seu AVA bíblico pessoal • leitura, teologia e arte" right={<div className="flex gap-2"><button type="button" onClick={() => setAba("configuracoes")} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><Settings className="h-5 w-5" /></button><button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><Search className="h-5 w-5" /></button></div>} />
      <div className="mx-auto max-w-6xl pb-28">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={cn("overflow-hidden rounded-[2rem] bg-gradient-to-br p-6 shadow-2xl shadow-black/40 md:p-10", accent.gradient)}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-white/80">Devocional de hoje • {label}</p>
              <h2 className="mt-1 text-2xl font-black text-white md:text-4xl">{devotional.titulo}</h2>
            </div>
            <span className="rounded-full bg-black/25 px-4 py-2 text-sm font-black text-white">{devotional.versiculo}</span>
          </div>
          <p className="mt-10 max-w-4xl text-3xl font-medium leading-tight text-white md:text-5xl md:leading-tight">{devotional.versiculoTexto}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl bg-black/20 p-5 text-white/90">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60">Reflexão do dia</p>
              <p className="mt-3 text-lg font-semibold leading-8">{devotional.reflexao}</p>
            </div>
            <div className="rounded-3xl bg-black/20 p-5 text-white/90">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60">Louvor sugerido</p>
              <h3 className="mt-3 text-2xl font-black text-white">{devotional.musica.titulo}</h3>
              <p className="mt-1 text-sm font-bold text-white/70">{devotional.musica.artista}</p>
              <p className="mt-3 text-sm leading-6 text-white/80">{devotional.musica.motivo}</p>
              <a href={spotifyUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-black">Abrir música no Spotify</a>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3 text-center text-xs font-bold text-white/80">
            <button type="button" className="rounded-2xl bg-black/20 p-3"><Heart className="mx-auto mb-1 h-5 w-5" />Salvar</button>
            <button type="button" className="rounded-2xl bg-black/20 p-3"><BookOpen className="mx-auto mb-1 h-5 w-5" />Ler</button>
            <button type="button" className="rounded-2xl bg-black/20 p-3"><Share2 className="mx-auto mb-1 h-5 w-5" />Enviar</button>
            <button type="button" className="rounded-2xl bg-black/20 p-3"><MoreHorizontal className="mx-auto mb-1 h-5 w-5" />Mais</button>
          </div>
        </motion.div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={cn("rounded-[2rem] p-5 ring-1", theme.cardSoft, theme.ring)}>
            <p className={cn("text-xs font-black uppercase tracking-[0.2em]", accent.text)}>Contexto do devocional</p>
            <p className={cn("mt-3 text-base leading-8", theme.text)}>{devotional.contexto}</p>
            <div className="mt-5 rounded-3xl bg-white p-5 text-black">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Oração guiada</p>
              <p className="mt-2 text-base font-bold leading-7">{devotional.oracao}</p>
            </div>
          </div>
          <div className={cn("rounded-[2rem] p-5 ring-1", theme.cardSoft, theme.ring)}>
            <p className={cn("text-xs font-black uppercase tracking-[0.2em]", accent.text)}>Leitura guiada</p>
            <div className="mt-4 space-y-3">
              {devotional.leituraGuiada.map((step, index) => <div key={`${devotional.titulo}-${index}`} className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-black">{index + 1}</span><p className={cn("text-sm font-semibold leading-6", theme.text)}>{step}</p></div>)}
            </div>
          </div>
        </div>
        <SectionHeader theme={theme} title="Planos liberados para você" action="Ver todos" onAction={() => setAba("planos")} />
        <div className="grid gap-4 lg:grid-cols-2">
          {readingPlans.slice(0, 6).map((plan) => (
            <button key={plan.id} type="button" onClick={() => openPlan(plan)} className={cn("flex items-center gap-4 rounded-3xl p-4 text-left ring-1 transition hover:scale-[1.01]", theme.card, theme.ring)}>
              <PlanCover plan={plan} />
              <div className="min-w-0 flex-1"><p className={cn("text-sm font-semibold", theme.muted)}>{plan.dias} dias • tudo liberado</p><h3 className={cn("mt-1 text-lg font-black leading-snug", theme.text)}>{plan.titulo}</h3><MiniStars accent={accent} /><div className="mt-3"><ProgressBar value={plan.progresso} accent={accent} /></div></div>
              <span className="hidden rounded-full bg-white px-5 py-3 text-sm font-black text-black md:inline-flex">Abrir</span>
            </button>
          ))}
        </div>
        <SectionHeader theme={theme} title="Temas que iluminam 2026" action="Descobrir" onAction={() => setAba("descubra")} />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[["Discernimento", "bg-emerald-700"], ["Identidade", "bg-purple-800"], ["Arrebatamento", "bg-indigo-800"], ["Arte & Evangelho", "bg-orange-700"]].map(([item, bg]) => <button key={item} type="button" onClick={() => setAba(item === "Arrebatamento" ? "arrebatamento" : "estudos")} className={cn("rounded-3xl p-6 text-left text-xl font-black uppercase tracking-wide text-white", bg)}>{item}</button>)}
        </div>
      </div>
    </div>
  );
}

function BibleView({ theme, bibleData }) {
  const defaultBook = bibleBooks.find((b) => b.nome === "Marcos") || bibleBooks[0];
  const [book, setBook] = useState(defaultBook);
  const [chapter, setChapter] = useState(10);
  const [readerOpen, setReaderOpen] = useState(true);
  const [fontSize, setFontSize] = useState(22);
  const sample = getBibleChapterContent(book.nome, chapter, bibleData);

  if (readerOpen) {
    return (
      <div className="mx-auto max-w-5xl pb-28">
        <TopBar theme={theme} title={`${book.nome} ${chapter}`} subtitle="Leitura bíblica • modo confortável" right={<div className="flex gap-2"><button type="button" onClick={() => setFontSize((size) => Math.max(16, size - 2))} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-black ring-1 ring-white/10">A-</button><button type="button" onClick={() => setFontSize((size) => Math.min(36, size + 2))} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-black ring-1 ring-white/10">A+</button><button type="button" onClick={() => setReaderOpen(false)} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><BookOpen className="h-5 w-5" /></button></div>} />
        <article className="px-2 md:px-8"><h2 className={cn("mb-6 text-3xl font-black md:text-5xl", theme.text)}>{sample.titulo}</h2><p className={cn("mb-8 rounded-3xl p-4 text-sm leading-6 ring-1", theme.card, theme.muted, theme.ring)}>{sample.nota}</p><div className="space-y-7">{sample.versos.map((verse) => <p key={verse.n} className={cn("font-semibold leading-[1.85]", verse.red ? "text-red-500" : theme.text)} style={{ fontSize }}><sup className={cn("mr-2 text-sm font-black", verse.red ? "text-red-400" : theme.muted)}>{String(verse.n).replace(".1", "")}</sup>{verse.texto}{verse.speaker ? <span className="ml-3 align-middle text-xs font-black uppercase tracking-[0.2em] text-red-400">{verse.speaker}</span> : null}</p>)}</div></article>
        <div className={cn("fixed bottom-24 left-1/2 z-30 flex w-[min(92vw,760px)] -translate-x-1/2 items-center justify-between rounded-[2rem] p-3 shadow-2xl ring-1 backdrop-blur-xl", theme.cardSoft, theme.ring)}>
          {[{ label: "Salvar", icon: Bookmark }, { label: "Anotação", icon: NotebookPen }, { label: "Copiar", icon: Copy }, { label: "Compartilhar", icon: Share2 }, { label: "Orar", icon: Heart }].map((item) => { const Icon = item.icon; return <button type="button" key={item.label} className={cn("flex flex-1 flex-col items-center rounded-2xl px-2 py-2 text-xs font-bold hover:bg-white/10", theme.muted)}><Icon className="mb-1 h-5 w-5" />{item.label}</button>; })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar theme={theme} title="Bíblia" subtitle="Livros e capítulos" right={<button type="button" onClick={() => setReaderOpen(true)} className="rounded-full bg-white px-5 py-3 text-sm font-black text-black">Abrir leitura</button>} />
      <div className="mx-auto grid max-w-6xl gap-6 pb-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div className={cn("rounded-[2rem] p-5 ring-1", theme.card, theme.ring)}><div className="mb-5 flex rounded-full bg-white/10 p-1">{["Antigo", "Novo"].map((testamento) => <button key={testamento} type="button" className={cn("flex-1 rounded-full px-4 py-2 text-sm font-black", theme.text)}>{testamento}</button>)}</div><div className="max-h-[640px] space-y-2 overflow-y-auto pr-1">{bibleBooks.map((currentBook) => <button key={currentBook.nome} type="button" onClick={() => { setBook(currentBook); setChapter(1); }} className={cn("flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left font-bold", book.nome === currentBook.nome ? "bg-white text-black" : "bg-white/10 hover:bg-white/20", theme.text)}><span>{currentBook.nome}</span><span className="text-xs opacity-60">{currentBook.capitulos}</span></button>)}</div></div>
        <div className={cn("rounded-[2rem] p-5 ring-1", theme.card, theme.ring)}><div className="mb-5 flex items-center justify-between"><div><p className={cn("text-sm font-bold", theme.muted)}>{book.testamento} Testamento</p><h2 className={cn("text-3xl font-black", theme.text)}>{book.nome}</h2></div><button type="button" onClick={() => setReaderOpen(true)} className="rounded-full bg-white px-5 py-3 text-sm font-black text-black">Ler</button></div><div className="grid grid-cols-5 gap-2 sm:grid-cols-7 md:grid-cols-8 xl:grid-cols-10">{Array.from({ length: book.capitulos }, (_, index) => index + 1).map((currentChapter) => <button key={currentChapter} type="button" onClick={() => { setChapter(currentChapter); setReaderOpen(true); }} className={cn("aspect-square rounded-2xl text-lg font-black", chapter === currentChapter ? "bg-white text-black" : "bg-white/10 hover:bg-white/20", theme.text)}>{currentChapter}</button>)}</div></div>
      </div>
    </div>
  );
}

function PlansView({ openPlan, selectedPlan, closePlan, theme, accent, completedReadings, toggleReading, bibleData }) {
  const [selectedReading, setSelectedReading] = useState(null);
  const [activeLessonTab, setActiveLessonTab] = useState("história");
  const [selectedPlanDay, setSelectedPlanDay] = useState(1);
  const [selectedChronoChapter, setSelectedChronoChapter] = useState(null);
  const [chronoFontSize, setChronoFontSize] = useState(28);
  const isChronologicalPlan = selectedPlan?.id === "biblia-365" || selectedPlan?.id === "cronologico";

  if (selectedPlan && isChronologicalPlan && selectedChronoChapter) {
    const { bookName, chapterNumber } = splitChapterLabel(selectedChronoChapter);
    const bookInfo = bibleBooks.find((item) => item.nome === bookName) || bibleBooks[0];
    const sample = getBibleChapterContent(bookName, chapterNumber, bibleData);

    return (
      <div className="mx-auto max-w-4xl pb-28">
        <TopBar theme={theme} title={`Selecionado: ${selectedChronoChapter}`} subtitle="Cronológico • leitura bíblica" showBack onBack={() => setSelectedChronoChapter(null)} right={<div className="flex gap-2"><button type="button" onClick={() => setChronoFontSize((size) => Math.max(16, size - 2))} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-black ring-1 ring-white/10">A-</button><button type="button" onClick={() => setChronoFontSize((size) => Math.min(40, size + 2))} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-black ring-1 ring-white/10">A+</button><button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><MoreHorizontal className="h-5 w-5" /></button></div>} />
        <article className="px-2 md:px-8">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-black">{selectedChronoChapter}</span>
            <span className={cn("rounded-full bg-white/10 px-4 py-2 text-sm font-black", theme.text)}>ARA</span>
            <span className={cn("rounded-full bg-white/10 px-4 py-2 text-sm font-black", accent.text)}>Dia {selectedPlanDay} de 365</span>
          </div>
          <h2 className={cn("mb-8 text-4xl font-black leading-tight md:text-6xl", theme.text)}>{sample.titulo || `${bookInfo.nome} ${chapterNumber}`}</h2>
          <div className="space-y-8">
            {sample.versos.map((verse) => <p key={verse.n} className={cn("font-black leading-[1.75] md:leading-[1.65]", verse.red ? "text-red-500" : theme.text)} style={{ fontSize: chronoFontSize }}><sup className={cn("mr-3 text-base font-black", verse.red ? "text-red-400" : theme.muted)}>{String(verse.n).replace(".1", "")}</sup>{verse.texto}{verse.speaker ? <span className="ml-3 align-middle text-xs font-black uppercase tracking-[0.2em] text-red-400">{verse.speaker}</span> : null}</p>)}
          </div>
        </article>
        <div className={cn("fixed bottom-24 left-1/2 z-30 flex w-[min(92vw,760px)] -translate-x-1/2 items-center justify-between rounded-[2rem] p-3 shadow-2xl ring-1 backdrop-blur-xl", theme.cardSoft, theme.ring)}>
          {[{ label: "Salvar", icon: Bookmark }, { label: "Anotação", icon: NotebookPen }, { label: "Copiar", icon: Copy }, { label: "Próximo", icon: ChevronRight }].map((item) => { const Icon = item.icon; return <button type="button" key={item.label} className={cn("flex flex-1 flex-col items-center rounded-2xl px-2 py-2 text-xs font-bold hover:bg-white/10", theme.muted)}><Icon className="mb-1 h-5 w-5" />{item.label}</button>; })}
        </div>
      </div>
    );
  }

  if (selectedPlan && isChronologicalPlan) {
    const currentDay = Math.min(Math.max(1, selectedPlanDay), selectedPlan.leituras.length);
    const currentReading = selectedPlan.leituras[currentDay - 1] || selectedPlan.leituras[0];
    const chapters = expandReadingChapters(currentReading);
    const done = selectedPlan.leituras.filter((reading) => completedReadings[`${selectedPlan.id}-${reading.dia}`]).length;
    const percent = Math.round((done / selectedPlan.leituras.length) * 100);
    const isCurrentDayDone = Boolean(completedReadings[`${selectedPlan.id}-${currentReading.dia}`]);
    const windowStart = Math.max(1, currentDay - 2);
    const dayCards = Array.from({ length: 7 }, (_, index) => windowStart + index).filter((day) => day <= selectedPlan.leituras.length);

    return (
      <div className="mx-auto max-w-5xl pb-32">
        <TopBar theme={theme} title={selectedPlan.id === "biblia-365" ? "Cronológico" : selectedPlan.titulo} subtitle="Leitura da Bíblia em 365 dias" showBack onBack={closePlan} right={<button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><MoreHorizontal className="h-5 w-5" /></button>} />
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-200 via-yellow-200 to-zinc-950 p-6 shadow-2xl md:p-10">
          <div className="flex min-h-56 flex-col justify-between md:min-h-72">
            <div className="flex items-center justify-between"><p className="rounded-full bg-black/25 px-4 py-2 text-sm font-black text-white">Cronológico</p><p className="rounded-full bg-white px-4 py-2 text-sm font-black text-black">{percent}%</p></div>
            <div><p className="text-sm font-black uppercase tracking-[0.2em] text-white/80">Plano anual</p><h2 className="mt-2 max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl">Bíblia em ordem narrativa</h2></div>
          </div>
        </div>
        <div className="mt-5 overflow-x-auto pb-2">
          <div className="flex gap-3">
            {dayCards.map((day) => {
              const reading = selectedPlan.leituras[day - 1];
              const dayDone = Boolean(completedReadings[`${selectedPlan.id}-${reading.dia}`]);
              return <button key={day} type="button" onClick={() => setSelectedPlanDay(day)} className={cn("relative min-w-36 rounded-2xl p-4 text-center ring-2 transition", currentDay === day ? "bg-transparent ring-white" : cn(theme.cardSoft, "ring-transparent hover:ring-white/30"))}><p className={cn("text-3xl font-black", theme.text)}>{day}</p><p className={cn("mt-2 text-sm font-bold", theme.muted)}>{getPlanDateLabel(day)}</p>{dayDone ? <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-white" /> : null}</button>;
            })}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div><h2 className={cn("text-3xl font-black md:text-4xl", theme.text)}>Dia {currentDay} de 365</h2><p className={cn("mt-1 text-sm font-bold", theme.muted)}>{currentReading.tema}</p></div>
          <span className={cn("rounded-full px-5 py-3 text-sm font-black ring-1", isCurrentDayDone ? "bg-emerald-500/20 text-emerald-300 ring-emerald-500/30" : cn("bg-white/5", theme.text, theme.ring))}>{isCurrentDayDone ? "Em dia" : getChronologicalStatus(currentDay)}</span>
        </div>
        <div className="mt-6 space-y-3">
          {chapters.map((chapter) => {
            const chapterKey = `${selectedPlan.id}-${currentReading.dia}-${chapter}`;
            const chapterDone = Boolean(completedReadings[chapterKey] || isCurrentDayDone);
            return (
              <div key={chapter} role="button" tabIndex={0} onClick={() => setSelectedChronoChapter(chapter)} onKeyDown={(event) => { if (event.key === "Enter") setSelectedChronoChapter(chapter); }} className="flex cursor-pointer items-center gap-4 rounded-3xl px-2 py-4 transition hover:bg-white/10">
                <button type="button" onClick={(event) => { event.stopPropagation(); toggleReading(chapterKey); }} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full">{chapterDone ? <CheckCircle2 className="h-9 w-9 text-white" /> : <Circle className={cn("h-9 w-9", theme.muted)} />}</button>
                <h3 className={cn("flex-1 text-2xl font-black", theme.text)}>{chapter}</h3>
                <ChevronRight className={cn("h-8 w-8", theme.text)} />
              </div>
            );
          })}
        </div>
        <div className="fixed bottom-24 left-1/2 z-30 w-[min(92vw,760px)] -translate-x-1/2">
          <button type="button" onClick={() => setSelectedChronoChapter(chapters[0])} className="w-full rounded-full bg-white px-8 py-5 text-xl font-black text-black shadow-2xl">Começar leitura</button>
        </div>
      </div>
    );
  }

  if (selectedPlan && selectedReading) {
    const detail = createLessonContent(selectedPlan, selectedReading);
    const tabs = Object.keys(detail.tabs);
    const activeTab = tabs.includes(activeLessonTab) ? activeLessonTab : tabs[0];
    const key = `${selectedPlan.id}-${selectedReading.dia}`;
    const isDone = Boolean(completedReadings[key]);

    return (
      <div className="mx-auto max-w-5xl pb-28">
        <TopBar theme={theme} title={detail.titulo} subtitle={detail.subtitulo} showBack onBack={() => setSelectedReading(null)} right={<button type="button" onClick={() => toggleReading(key)} className={cn("rounded-full px-5 py-3 text-sm font-black", isDone ? "bg-emerald-500/20 text-emerald-300" : "bg-white text-black")}>{isDone ? "Lido" : "Marcar como lido"}</button>} />
        <article className={cn("rounded-[2rem] p-6 ring-1 md:p-8", theme.card, theme.ring)}>
          <div className={cn("mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black", accent.solid, "text-white")}>
            <BookOpen className="h-4 w-4" /> Módulo {selectedReading.dia} aberto
          </div>
          <h2 className={cn("text-4xl font-black leading-tight md:text-5xl", theme.text)}>{detail.titulo}</h2>
          <p className={cn("mt-4 text-lg leading-8", theme.muted)}>{detail.subtitulo}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {selectedReading.passagens.map((passage) => <span key={passage} className={cn("rounded-full bg-white/10 px-4 py-2 text-sm font-bold", theme.text)}>{passage}</span>)}
          </div>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => <button key={tab} type="button" onClick={() => setActiveLessonTab(tab)} className={cn("shrink-0 rounded-full px-5 py-3 text-sm font-black capitalize", activeTab === tab ? "bg-white text-black" : cn("bg-white/10", theme.text))}>{tab}</button>)}
          </div>
          <div className="mt-7 space-y-5">
            {detail.tabs[activeTab].map((paragraph, index) => <p key={`${selectedPlan.id}-${selectedReading.dia}-${activeTab}-${index}`} className={cn("text-lg leading-9", theme.text)}>{paragraph}</p>)}
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <button type="button" onClick={() => toggleReading(key)} className={cn("rounded-3xl p-5 text-left font-black", isDone ? "bg-emerald-500/20 text-emerald-300" : "bg-white text-black")}>{isDone ? "Módulo marcado como lido" : "Marcar como lido"}</button>
            <button type="button" onClick={() => setSelectedReading(null)} className={cn("rounded-3xl bg-white/10 p-5 text-left font-black", theme.text)}>Voltar para todos os módulos</button>
          </div>
        </article>
      </div>
    );
  }

  if (selectedPlan) {
    const done = selectedPlan.leituras.filter((reading) => completedReadings[`${selectedPlan.id}-${reading.dia}`]).length;
    const percent = Math.round((done / selectedPlan.leituras.length) * 100);
    return (
      <div className="mx-auto max-w-5xl pb-28">
        <TopBar theme={theme} title={selectedPlan.titulo} subtitle={`${selectedPlan.dias} dias • tudo liberado • ${done}/${selectedPlan.leituras.length} marcados`} showBack onBack={closePlan} right={<button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><MoreHorizontal className="h-5 w-5" /></button>} />
        <button type="button" onClick={() => setSelectedReading(selectedPlan.leituras[0])} className="w-full text-left"><PlanCover plan={selectedPlan} large /></button>
        <div className={cn("mt-6 rounded-[2rem] p-5 ring-1", theme.card, theme.ring)}><div className="mb-2 flex items-center justify-between"><p className={cn("font-black", theme.text)}>Progresso livre</p><p className={cn("font-black", accent.text)}>{percent}%</p></div><ProgressBar value={percent} accent={accent} /><p className={cn("mt-3 text-sm leading-6", theme.muted)}>Todos os módulos estão desbloqueados. Toque em qualquer card para abrir história, base bíblica, explicação, aplicação e prática.</p></div>
        <div className="mt-6 grid gap-3">
          {selectedPlan.leituras.map((reading) => {
            const key = `${selectedPlan.id}-${reading.dia}`;
            const isDone = Boolean(completedReadings[key]);
            return (
              <div key={key} role="button" tabIndex={0} onClick={() => setSelectedReading(reading)} onKeyDown={(event) => { if (event.key === "Enter") setSelectedReading(reading); }} className={cn("flex cursor-pointer items-center gap-4 rounded-3xl p-5 ring-1 transition hover:scale-[1.01] hover:bg-white/10", theme.card, theme.ring)}>
                <button type="button" onClick={(event) => { event.stopPropagation(); toggleReading(key); }} className="shrink-0">{isDone ? <CircleCheck className="h-9 w-9 text-emerald-400" /> : <Circle className={cn("h-9 w-9", theme.muted)} />}</button>
                <div className="min-w-0 flex-1"><p className={cn("text-sm font-bold", theme.muted)}>Módulo {reading.dia} • {reading.tema}</p><h3 className={cn("text-xl font-black", theme.text)}>{reading.titulo}</h3><p className={cn("mt-1 text-sm", theme.muted)}>{reading.passagens.join(" • ")}</p><p className={cn("mt-2 text-xs font-black uppercase tracking-[0.18em]", accent.text)}>Abrir estudo completo</p></div>
                <div className="flex items-center gap-2"><button type="button" onClick={(event) => { event.stopPropagation(); toggleReading(key); }} className={cn("rounded-full px-4 py-2 text-sm font-black", isDone ? "bg-emerald-500/20 text-emerald-300" : "bg-white text-black")}>{isDone ? "Lido" : "Marcar"}</button><ChevronRight className={cn("h-6 w-6", theme.muted)} /></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar theme={theme} title="Planos" subtitle="Todos liberados, sem bloqueio por dia" />
      <div className="mx-auto max-w-6xl pb-28">
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1">{["Todos", "Bíblia", "Jesus", "Teologia", "Atual", "Personagens", "Artes"].map((category, index) => <button key={category} type="button" className={cn("shrink-0 rounded-full px-5 py-3 text-sm font-black", index === 0 ? "bg-white text-black" : "bg-white/10", theme.text)}>{category}</button>)}</div>
        <div className="mb-8 overflow-x-auto pb-3"><div className="flex gap-4">{readingPlans.slice(0, 4).map((plan) => <button key={plan.id} type="button" onClick={() => openPlan(plan)} className="min-w-[320px] text-left md:min-w-[520px]"><PlanCover plan={plan} large /><h3 className={cn("mt-3 text-xl font-bold", theme.text)}>{plan.titulo}</h3><p className={cn("mt-1 text-sm", theme.muted)}>Toque para abrir todos os módulos</p></button>)}</div></div>
        <SectionHeader theme={theme} title="Biblioteca de planos" />
        <div className="space-y-4">{readingPlans.map((plan) => <button key={plan.id} type="button" onClick={() => openPlan(plan)} className="flex w-full items-center gap-4 rounded-3xl p-3 text-left transition hover:bg-white/10"><PlanCover plan={plan} /><div className="min-w-0 flex-1"><p className={cn("text-sm font-semibold", theme.muted)}>{plan.dias} dias • {plan.foco}</p><h3 className={cn("truncate text-xl font-black", theme.text)}>{plan.titulo} — {plan.subtitulo}</h3>{plan.progresso < 20 ? <MiniStars accent={accent} /> : <div className="mt-2 max-w-xs"><ProgressBar value={plan.progresso} accent={accent} /></div>}</div><span className="rounded-full bg-white px-6 py-3 text-sm font-black text-black">Abrir</span></button>)}</div>
      </div>
    </div>
  );
}

function DiscoverView({ setAba, theme }) {
  const items = [
    { id: "estudos", title: "Estudos para hoje", desc: "Temas atuais, fé, mente, pureza e discernimento", icon: FileText },
    { id: "teologia", title: "Faculdade de Teologia", desc: "Bibliologia, hermenêutica, sistemática e história", icon: BookOpen },
    { id: "arrebatamento", title: "Arrebatamento", desc: "Volta de Cristo e acontecimentos finais", icon: Flame },
    { id: "personagens", title: "Personagens bíblicos", desc: "Estudos detalhados e ideias de cena", icon: Users },
    { id: "perguntas", title: "Perguntas comentadas", desc: "Revisão com resposta explicada", icon: ClipboardCheck },
    { id: "biblioteca", title: "Biblioteca", desc: "Acervo pessoal de fé, teatro e estudos", icon: Library },
    { id: "caderno", title: "Caderno", desc: "Anotações, orações, roteiros e revelações", icon: NotebookPen },
    { id: "configuracoes", title: "Configurações", desc: "Conta, cores, tema e ícone inicial", icon: Settings },
  ];
  return (
    <div>
      <TopBar theme={theme} title="Descubra" subtitle="Seu mapa de estudo, fé e arte" />
      <div className="mx-auto max-w-6xl pb-28"><div className="relative mb-6"><Search className="absolute left-5 top-4 h-5 w-5 text-zinc-500" /><input className={cn("w-full rounded-full py-4 pl-14 pr-5 outline-none ring-1 focus:ring-white/20", theme.card, theme.text, theme.ring)} placeholder="Buscar por tema, livro, personagem ou dúvida..." /></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{items.map((item) => { const Icon = item.icon; return <button key={item.id} type="button" onClick={() => setAba(item.id)} className={cn("group rounded-[2rem] p-6 text-left ring-1 transition hover:-translate-y-1 hover:bg-white/10", theme.card, theme.ring)}><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black"><Icon className="h-7 w-7" /></div><h3 className={cn("text-2xl font-black", theme.text)}>{item.title}</h3><p className={cn("mt-2 text-sm leading-6", theme.muted)}>{item.desc}</p><ChevronRight className={cn("mt-5 h-6 w-6 transition group-hover:translate-x-1", theme.muted)} /></button>; })}</div></div>
    </div>
  );
}

function StudiesView({ theme, accent }) {
  const [selected, setSelected] = useState(studies[0]);
  const [tab, setTab] = useState("visão");
  const tabs = Object.keys(selected.abas);
  return (
    <div>
      <TopBar theme={theme} title="Estudos Bíblicos" subtitle="Conteúdo denso, com abas e aplicação" />
      <div className="mx-auto grid max-w-6xl gap-6 pb-28 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-3">{studies.map((study) => <button key={study.id} type="button" onClick={() => { setSelected(study); setTab("visão"); }} className={cn("w-full rounded-3xl p-5 text-left ring-1", selected.id === study.id ? "bg-white text-black" : cn(theme.card, theme.text, "hover:bg-white/10"), theme.ring)}><p className={cn("text-xs font-black uppercase tracking-[0.2em]", selected.id === study.id ? "text-zinc-600" : accent.text)}>{study.categoria}</p><h3 className="mt-2 text-xl font-black">{study.titulo}</h3><p className={cn("mt-2 text-sm", selected.id === study.id ? "text-zinc-600" : theme.muted)}>{study.duracao} • {study.nivel}</p></button>)}</div>
        <article className={cn("rounded-[2rem] p-6 ring-1 md:p-8", theme.card, theme.ring)}><p className={cn("text-xs font-black uppercase tracking-[0.2em]", accent.text)}>{selected.categoria}</p><h2 className={cn("mt-2 text-4xl font-black leading-tight", theme.text)}>{selected.titulo}</h2><p className={cn("mt-4 text-lg leading-8", theme.muted)}>{selected.resumo}</p><div className="mt-6 flex flex-wrap gap-2">{selected.topicos.map((topic) => <span key={topic} className={cn("rounded-full bg-white/10 px-4 py-2 text-sm font-bold", theme.text)}>{topic}</span>)}</div><div className="mt-8 flex gap-2 overflow-x-auto pb-2">{tabs.map((item) => <button key={item} type="button" onClick={() => setTab(item)} className={cn("shrink-0 rounded-full px-5 py-3 text-sm font-black capitalize", tab === item ? "bg-white text-black" : cn("bg-white/10", theme.text))}>{item}</button>)}</div><div className="mt-6 space-y-5">{selected.abas[tab].map((paragraph, index) => <p key={`${selected.id}-${tab}-${index}`} className={cn("text-lg leading-9", theme.text)}>{paragraph}</p>)}</div><div className="mt-8 rounded-3xl bg-white p-5 text-black"><p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">Interação</p><p className="mt-2 text-lg font-bold leading-8">Marque este conteúdo como estudado no caderno, escreva uma oração e crie uma pergunta de revisão para fixar o tema.</p></div></article>
      </div>
    </div>
  );
}

function TheologyView({ theme, accent }) {
  const [selected, setSelected] = useState(theologyModules[0]);
  const selectedLessons = selected.aulas || [];
  return (
    <div>
      <TopBar theme={theme} title="Teologia" subtitle="Grade completa de formação cristã" />
      <div className="mx-auto grid max-w-6xl gap-6 pb-28 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="rounded-[2rem] bg-gradient-to-br from-zinc-100 to-zinc-500 p-6 text-black"><p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-700">Curso pessoal</p><h2 className="mt-2 text-3xl font-black">Base de fé com doutrina e discernimento.</h2><p className="mt-4 text-sm font-semibold leading-6 text-zinc-800">Toque em qualquer disciplina para abrir conteúdo, aulas e aplicação.</p></div>
          <div className="mt-4 space-y-3">{theologyModules.map((module) => <button key={module.titulo} type="button" onClick={() => setSelected(module)} className={cn("w-full rounded-3xl p-5 text-left ring-1", selected.titulo === module.titulo ? "bg-white text-black" : cn(theme.card, theme.text, "hover:bg-white/10"), theme.ring)}><h3 className="text-xl font-black">{module.titulo}</h3><p className={cn("mt-2 text-sm leading-6", selected.titulo === module.titulo ? "text-zinc-600" : theme.muted)}>{module.subtitulo}</p></button>)}</div>
        </div>
        <article className={cn("rounded-[2rem] p-6 ring-1 md:p-8", theme.card, theme.ring)}>
          <p className={cn("text-xs font-black uppercase tracking-[0.2em]", accent.text)}>Disciplina aberta</p>
          <h2 className={cn("mt-2 text-4xl font-black", theme.text)}>{selected.titulo}</h2>
          <p className={cn("mt-4 text-lg leading-8", theme.muted)}>{selected.subtitulo}</p>
          <div className="mt-8 space-y-4">{selectedLessons.map((lesson, index) => <button key={`${selected.titulo}-${lesson}`} type="button" className={cn("w-full rounded-3xl p-5 text-left ring-1 transition hover:bg-white/10", theme.cardSoft, theme.ring)}><p className={cn("text-xs font-black uppercase tracking-[0.2em]", accent.text)}>Aula {index + 1}</p><h3 className={cn("mt-1 text-xl font-black", theme.text)}>{lesson}</h3><p className={cn("mt-2 text-sm leading-6", theme.muted)}>Conteúdo: definição, base bíblica, contexto histórico, erros comuns, aplicação para vida cristã e exercício de fixação.</p></button>)}</div>
          <div className="mt-8 rounded-3xl bg-white p-5 text-black"><p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Aplicação ministerial</p><p className="mt-2 text-lg font-bold leading-8">Transforme esta disciplina em uma aula, devocional ou roteiro teatral: conceito bíblico, conflito humano, luz de Cristo e resposta prática.</p></div>
        </article>
      </div>
    </div>
  );
}

function RaptureView({ theme, accent }) {
  const [selected, setSelected] = useState(raptureTopics[0]);
  const [tab, setTab] = useState("fundamento");
  const tabs = Object.keys(selected.conteudo);
  return (
    <div>
      <TopBar theme={theme} title="Arrebatamento" subtitle="Cada módulo abre um estudo denso e completo" />
      <div className="mx-auto grid max-w-6xl gap-6 pb-28 lg:grid-cols-[0.75fr_1.25fr]">
        <div><div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 via-purple-800 to-black p-6"><p className="text-sm font-black uppercase tracking-[0.2em] text-purple-100">Tema especial</p><h2 className="mt-2 text-3xl font-black leading-tight text-white">Escatologia com Bíblia, temor e esperança.</h2><p className="mt-4 text-sm leading-6 text-purple-100">A volta de Cristo deve gerar santidade, missão e amor por Jesus, não medo vazio.</p></div><div className="mt-4 space-y-3">{raptureTopics.map((topic, index) => <button key={topic.id} type="button" onClick={() => { setSelected(topic); setTab("fundamento"); }} className={cn("w-full rounded-3xl p-4 text-left ring-1", selected.id === topic.id ? "bg-white text-black" : cn(theme.card, theme.text, "hover:bg-white/10"), theme.ring)}><p className={cn("text-xs font-black uppercase tracking-[0.2em]", selected.id === topic.id ? "text-zinc-600" : accent.text)}>Módulo {index + 1}</p><h3 className="mt-1 text-lg font-black">{topic.titulo}</h3><p className={cn("mt-2 text-sm leading-6", selected.id === topic.id ? "text-zinc-600" : theme.muted)}>{topic.resumo}</p></button>)}</div></div>
        <article className={cn("rounded-[2rem] p-6 ring-1 md:p-8", theme.card, theme.ring)}><p className={cn("text-xs font-black uppercase tracking-[0.2em]", accent.text)}>Estudo aberto</p><h2 className={cn("mt-2 text-4xl font-black leading-tight", theme.text)}>{selected.titulo}</h2><p className={cn("mt-4 text-lg leading-8", theme.muted)}>{selected.resumo}</p><div className="mt-5 flex flex-wrap gap-2">{selected.base.map((base) => <span key={base} className={cn("rounded-full bg-white/10 px-4 py-2 text-sm font-bold", theme.text)}>{base}</span>)}</div><div className="mt-8 flex gap-2 overflow-x-auto pb-2">{tabs.map((item) => <button key={item} type="button" onClick={() => setTab(item)} className={cn("shrink-0 rounded-full px-5 py-3 text-sm font-black capitalize", tab === item ? "bg-white text-black" : cn("bg-white/10", theme.text))}>{item}</button>)}</div><div className="mt-6 space-y-5">{selected.conteudo[tab].map((paragraph, index) => <p key={`${selected.id}-${tab}-${index}`} className={cn("text-lg leading-9", theme.text)}>{paragraph}</p>)}</div></article>
      </div>
    </div>
  );
}

function CharactersView({ theme, accent }) {
  const [selected, setSelected] = useState(characters[0]);
  const [tab, setTab] = useState("história");
  const study = getCharacterStudy(selected);
  const sections = {
    história: study.história,
    contexto: study.contexto,
    lições: study.lições,
    teatro: study.teatro,
  };
  const tabs = Object.keys(sections);

  return (
    <div>
      <TopBar theme={theme} title="Personagens" subtitle="Estudo bíblico profundo + dramaturgia" />
      <div className="mx-auto grid max-w-6xl gap-6 pb-28 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="grid max-h-[760px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-1">
          {characters.map((character) => <button key={character.nome} type="button" onClick={() => { setSelected(character); setTab("história"); }} className={cn("rounded-3xl p-4 text-left ring-1 transition hover:scale-[1.01]", selected.nome === character.nome ? "bg-white text-black" : cn(theme.card, theme.text, "hover:bg-white/10"), theme.ring)}><h3 className="text-xl font-black">{character.nome}</h3><p className={cn("mt-1 text-sm", selected.nome === character.nome ? "text-zinc-600" : theme.muted)}>{character.papel}</p><p className={cn("mt-3 text-xs font-black uppercase tracking-[0.18em]", selected.nome === character.nome ? "text-zinc-600" : accent.text)}>Abrir estudo</p></button>)}
        </div>
        <article className={cn("rounded-[2rem] p-6 ring-1 md:p-8", theme.card, theme.ring)}>
          <div className={cn("mb-6 flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-gradient-to-br text-white", accent.gradient)}><Users className="h-10 w-10" /></div>
          <h2 className={cn("text-5xl font-black", theme.text)}>{selected.nome}</h2>
          <p className={cn("mt-2 text-xl font-bold", theme.muted)}>{selected.papel}</p>
          <div className="mt-5 flex flex-wrap gap-2">{selected.tags.map((tag) => <span key={`${selected.nome}-${tag}`} className={cn("rounded-full bg-white/10 px-4 py-2 text-sm font-bold", theme.text)}>{tag}</span>)}</div>
          <div className="mt-5 flex flex-wrap gap-2">{study.base.map((base) => <span key={`${selected.nome}-${base}`} className={cn("rounded-full px-4 py-2 text-sm font-black", accent.solid, "text-white")}>{base}</span>)}</div>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">{tabs.map((item) => <button key={item} type="button" onClick={() => setTab(item)} className={cn("shrink-0 rounded-full px-5 py-3 text-sm font-black capitalize", tab === item ? "bg-white text-black" : cn("bg-white/10", theme.text))}>{item}</button>)}</div>
          <div className="mt-7 space-y-5">{sections[tab].map((paragraph, index) => <p key={`${selected.nome}-${tab}-${index}`} className={cn("text-lg leading-9", theme.text)}>{paragraph}</p>)}</div>
          <div className="mt-8 rounded-3xl bg-white p-5 text-black"><p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Exercício criativo</p><p className="mt-2 text-lg font-bold leading-8">Escreva uma cena com conflito, silêncio, escolha e transformação. A história precisa respeitar a base bíblica e apontar para Cristo.</p></div>
        </article>
      </div>
    </div>
  );
}

function QuestionsView({ theme, accent }) {
  const [answers, setAnswers] = useState({});
  return (
    <div><TopBar theme={theme} title="Perguntas" subtitle="Revisão com respostas comentadas" /><div className="mx-auto max-w-5xl space-y-5 pb-28">{questions.map((question, questionIndex) => <div key={question.pergunta} className={cn("rounded-[2rem] p-6 ring-1", theme.card, theme.ring)}><p className={cn("text-sm font-black uppercase tracking-[0.2em]", accent.text)}>Questão {questionIndex + 1}</p><h2 className={cn("mt-2 text-2xl font-black leading-tight", theme.text)}>{question.pergunta}</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{question.opcoes.map((option, optionIndex) => { const chosen = answers[questionIndex] === optionIndex; const answered = answers[questionIndex] !== undefined; const right = optionIndex === question.correta; return <button key={option} type="button" onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))} className={cn("rounded-3xl p-4 text-left text-sm font-bold leading-6 ring-1", chosen && right ? "bg-emerald-500/20 text-emerald-100 ring-emerald-500/30" : "", chosen && !right ? "bg-rose-500/20 text-rose-100 ring-rose-500/30" : "", answered && !chosen && right ? "bg-emerald-500/10 text-emerald-100 ring-emerald-500/20" : "", !chosen && !(answered && right) ? cn("bg-white/10 hover:bg-white/20", theme.text, theme.ring) : "")}>{option}</button>; })}</div>{answers[questionIndex] !== undefined ? <div className="mt-5 rounded-3xl bg-white p-5 text-black"><p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Resposta comentada</p><p className="mt-2 text-base font-bold leading-7">{question.comentario}</p></div> : null}</div>)}</div></div>
  );
}

function NotebookView({ theme }) {
  const defaultText = `Ideia de estudo: como o arrebatamento deve produzir esperança e santidade, não paranoia.

Ideia de cena: uma noiva preparando a lâmpada enquanto o mundo tenta distraí-la.`;
  const [text, setText] = useState(() => readStorage("ava_notebook_text", defaultText));
  const [saved, setSaved] = useState(false);

  const saveNote = () => {
    writeStorage("ava_notebook_text", text);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  useEffect(() => {
    writeStorage("ava_notebook_text", text);
  }, [text]);

  return <div><TopBar theme={theme} title="Caderno" subtitle="Anotações, oração e dramaturgia" /><div className="mx-auto grid max-w-6xl gap-6 pb-28 lg:grid-cols-[1.2fr_0.8fr]"><div className={cn("rounded-[2rem] p-5 ring-1", theme.card, theme.ring)}><textarea value={text} onChange={(event) => setText(event.target.value)} className={cn("min-h-[520px] w-full resize-none rounded-[1.5rem] bg-black/20 p-5 text-xl leading-9 outline-none ring-1 focus:ring-white/20", theme.text, theme.ring)} /><button type="button" onClick={saveNote} className="mt-4 w-full rounded-full bg-white px-6 py-4 text-base font-black text-black">{saved ? "Anotação salva" : "Salvar anotação"}</button></div><div className="space-y-4">{["Roteiro: A Noiva e o Tempo", "Devocional: Arte como altar", "Estudo: João 14 e a promessa da volta", "Perguntas para jovens cristãos"].map((note) => <div key={note} className={cn("rounded-3xl p-5 ring-1", theme.card, theme.ring)}><p className={cn("text-lg font-black", theme.text)}>{note}</p><p className={cn("mt-2 text-sm leading-6", theme.muted)}>Rascunho salvo para transformar em aula, devocional ou cena teatral.</p></div>)}</div></div></div>;
}

function LibraryView({ theme }) {
  const libraryItems = [...readingPlans, ...studies];
  return <div><TopBar theme={theme} title="Biblioteca" subtitle="Seu acervo cristão e artístico" /><div className="mx-auto max-w-6xl pb-28"><div className="mb-6 flex gap-2 overflow-x-auto pb-1">{["Todos", "Bíblia", "Teologia", "Teatro", "PDFs", "Devocionais", "Áudios"].map((category, index) => <button key={category} type="button" className={cn("shrink-0 rounded-full px-5 py-3 text-sm font-black", index === 0 ? "bg-white text-black" : cn("bg-white/10", theme.text))}>{category}</button>)}</div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{libraryItems.map((item, index) => <div key={item.id || item.titulo} className={cn("rounded-[2rem] p-5 ring-1", theme.card, theme.ring)}><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">{index % 2 ? <FileText className="h-7 w-7" /> : <BookOpen className="h-7 w-7" />}</div><p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400">{item.categoria || "Material"}</p><h3 className={cn("mt-2 text-xl font-black", theme.text)}>{item.titulo}</h3><p className={cn("mt-2 text-sm leading-6", theme.muted)}>{item.subtitulo || item.resumo}</p></div>)}</div></div></div>;
}

function SettingsView({ theme, accent, themeId, setThemeId, accentId, setAccentId, homeIcon, setHomeIcon }) {
  return (
    <div><TopBar theme={theme} title="Configurações" subtitle="Conta, cores, tema e ícone inicial" /><div className="mx-auto max-w-5xl space-y-6 pb-28"><div className={cn("rounded-[2rem] p-6 ring-1", theme.card, theme.ring)}><div className="flex items-center gap-4"><div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-black"><UserCircle className="h-12 w-12" /></div><div><h2 className={cn("text-3xl font-black", theme.text)}>Eduardo</h2><p className={theme.muted}>Ator • cristão • adorador • escritor de teatro</p></div></div></div><div className={cn("rounded-[2rem] p-6 ring-1", theme.card, theme.ring)}><div className="mb-4 flex items-center gap-3"><Palette className={cn("h-6 w-6", accent.text)} /><h3 className={cn("text-2xl font-black", theme.text)}>Tema do app</h3></div><div className="grid gap-3 md:grid-cols-3">{Object.entries(themes).map(([id, item]) => <button key={id} type="button" onClick={() => setThemeId(id)} className={cn("rounded-3xl p-5 text-left ring-1", themeId === id ? "bg-white text-black" : cn("bg-white/10", theme.text, theme.ring))}><p className="font-black">{item.nome}</p><p className="mt-1 text-sm opacity-70">Aparência geral</p></button>)}</div></div><div className={cn("rounded-[2rem] p-6 ring-1", theme.card, theme.ring)}><h3 className={cn("text-2xl font-black", theme.text)}>Cor principal</h3><div className="mt-4 grid gap-3 md:grid-cols-4">{Object.entries(accents).map(([id, item]) => <button key={id} type="button" onClick={() => setAccentId(id)} className={cn("rounded-3xl p-5 text-left ring-1", accentId === id ? "bg-white text-black" : cn("bg-white/10", theme.text, theme.ring))}><span className={cn("mb-3 block h-8 w-8 rounded-full", item.solid)} /><p className="font-black">{item.nome}</p></button>)}</div></div><div className={cn("rounded-[2rem] p-6 ring-1", theme.card, theme.ring)}><h3 className={cn("text-2xl font-black", theme.text)}>Ícone de início</h3><div className="mt-4 grid gap-3 md:grid-cols-5">{Object.entries(homeIcons).map(([id, Icon]) => <button key={id} type="button" onClick={() => setHomeIcon(id)} className={cn("flex flex-col items-center gap-2 rounded-3xl p-5 ring-1", homeIcon === id ? "bg-white text-black" : cn("bg-white/10", theme.text, theme.ring))}><Icon className="h-8 w-8" /><span className="text-sm font-black capitalize">{id}</span></button>)}</div></div></div></div>
  );
}

function ProfileView({ setAba, theme, accent }) {
  return <div><TopBar theme={theme} title="Você" subtitle="Progresso espiritual e estudos" right={<button type="button" onClick={() => setAba("configuracoes")} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10"><Settings className="h-5 w-5" /></button>} /><div className="mx-auto max-w-6xl pb-28"><div className={cn("rounded-[2rem] p-6 ring-1 md:p-8", theme.card, theme.ring)}><div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-4"><div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-black"><UserCircle className="h-12 w-12" /></div><div><h2 className={cn("text-3xl font-black", theme.text)}>Eduardo</h2><p className={theme.muted}>Ator • cristão • adorador • escritor de teatro</p></div></div><button type="button" onClick={() => setAba("configuracoes")} className="rounded-full bg-white px-6 py-4 font-black text-black">Configurações</button></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["Dias de leitura", "42"], ["Planos ativos", "12"], ["Estudos", "28"], ["Questões", "86%"]].map(([label, value]) => <div key={label} className="rounded-3xl bg-white/10 p-5"><p className={cn("text-3xl font-black", theme.text)}>{value}</p><p className={cn("mt-1 text-sm", theme.muted)}>{label}</p></div>)}</div></div><SectionHeader theme={theme} title="Continuar agora" /><div className="grid gap-4 md:grid-cols-3">{[{ title: "Bíblia", aba: "biblia", icon: BookOpen }, { title: "Arrebatamento", aba: "arrebatamento", icon: Flame }, { title: "Personagens", aba: "personagens", icon: Users }].map((item) => { const Icon = item.icon; return <button key={item.title} type="button" onClick={() => setAba(item.aba)} className={cn("rounded-[2rem] p-6 text-left ring-1", theme.card, theme.ring)}><Icon className={cn("mb-5 h-8 w-8", accent.text)} /><h3 className={cn("text-2xl font-black", theme.text)}>{item.title}</h3><p className={cn("mt-2 text-sm", theme.muted)}>Toque para continuar sua jornada.</p></button>; })}</div></div></div>;
}

const bottomNav = [
  { id: "inicio", label: "Início" },
  { id: "biblia", label: "Bíblia", icon: BookOpen },
  { id: "planos", label: "Planos", icon: CheckCircle2 },
  { id: "descubra", label: "Descubra", icon: Search },
  { id: "voce", label: "Você", icon: UserCircle },
];

const discoverRoutes = ["estudos", "teologia", "arrebatamento", "personagens", "perguntas", "biblioteca", "caderno", "configuracoes"];

export default function App() {
  const [aba, setAba] = useState("inicio");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [completedReadings, setCompletedReadings] = useState(() => readStorage("ava_completed_readings", {}));
  const [themeId, setThemeId] = useState(() => readStorage("ava_theme_id", "noite"));
  const [accentId, setAccentId] = useState(() => readStorage("ava_accent_id", "rose"));
  const [homeIcon, setHomeIcon] = useState(() => readStorage("ava_home_icon", "cruz"));
  const [bibleData, setBibleData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    try {
      const cached = window.localStorage.getItem("ava_biblia_publica_json");
      if (cached) setBibleData(JSON.parse(cached));
    } catch (error) {
    }

    loadPublicBibleData().then((data) => {
      if (!data || cancelled) return;
      setBibleData(data);
      try {
        window.localStorage.setItem("ava_biblia_publica_json", JSON.stringify(data));
      } catch (error) {
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    writeStorage("ava_completed_readings", completedReadings);
  }, [completedReadings]);

  useEffect(() => {
    writeStorage("ava_theme_id", themeId);
  }, [themeId]);

  useEffect(() => {
    writeStorage("ava_accent_id", accentId);
  }, [accentId]);

  useEffect(() => {
    writeStorage("ava_home_icon", homeIcon);
  }, [homeIcon]);

  const theme = themes[themeId] || themes.noite;
  const accent = accents[accentId] || accents.rose;

  const goTo = (nextAba) => {
    if (nextAba !== "planos") setSelectedPlan(null);
    setAba(nextAba);
  };

  const openPlan = (plan) => {
    setSelectedPlan(plan);
    setAba("planos");
  };

  const toggleReading = (key) => {
    setCompletedReadings((current) => ({ ...current, [key]: !current[key] }));
  };

  const content = useMemo(() => {
    if (aba === "inicio") return <HomeView setAba={goTo} openPlan={openPlan} theme={theme} accent={accent} />;
    if (aba === "biblia") return <BibleView theme={theme} bibleData={bibleData} />;
    if (aba === "planos") return <PlansView openPlan={openPlan} selectedPlan={selectedPlan} closePlan={() => setSelectedPlan(null)} theme={theme} accent={accent} completedReadings={completedReadings} toggleReading={toggleReading} bibleData={bibleData} />;
    if (aba === "descubra") return <DiscoverView setAba={goTo} theme={theme} />;
    if (aba === "estudos") return <StudiesView theme={theme} accent={accent} />;
    if (aba === "teologia") return <TheologyView theme={theme} accent={accent} />;
    if (aba === "arrebatamento") return <RaptureView theme={theme} accent={accent} />;
    if (aba === "personagens") return <CharactersView theme={theme} accent={accent} />;
    if (aba === "perguntas") return <QuestionsView theme={theme} accent={accent} />;
    if (aba === "caderno") return <NotebookView theme={theme} />;
    if (aba === "biblioteca") return <LibraryView theme={theme} />;
    if (aba === "configuracoes") return <SettingsView theme={theme} accent={accent} themeId={themeId} setThemeId={setThemeId} accentId={accentId} setAccentId={setAccentId} homeIcon={homeIcon} setHomeIcon={setHomeIcon} />;
    if (aba === "voce") return <ProfileView setAba={goTo} theme={theme} accent={accent} />;
    return <HomeView setAba={goTo} openPlan={openPlan} theme={theme} accent={accent} />;
  }, [aba, selectedPlan, completedReadings, themeId, accentId, homeIcon, bibleData]);

  return (
    <div className={cn("min-h-screen px-4 antialiased selection:bg-rose-500/40 md:px-8", theme.bg, theme.text)}>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(244,63,94,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.12),transparent_35%)]" />
      {content}
      <nav className={cn("fixed bottom-4 left-1/2 z-50 w-[min(92vw,760px)] -translate-x-1/2 rounded-[2rem] border border-white/10 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl", theme.nav)}>
        <div className="grid grid-cols-5 gap-1">
          {bottomNav.map((item) => {
            const Icon = item.id === "inicio" ? homeIcons[homeIcon] : item.icon;
            const active = item.id === aba || (item.id === "descubra" && discoverRoutes.includes(aba));
            return <button key={item.id} type="button" onClick={() => goTo(item.id)} className={cn("flex flex-col items-center justify-center rounded-[1.5rem] px-2 py-3 text-xs font-black transition", active ? "bg-white text-black" : cn("hover:bg-white/10", theme.muted))}><Icon className="mb-1 h-6 w-6" />{item.label}</button>;
          })}
        </div>
      </nav>
    </div>
  );
}
