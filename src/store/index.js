import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// In order to simplify data loading and dev, painting list is locally stored instead of fetched through an API call
export default new Vuex.Store({
  state: {
    paintingList: [
      {
        id: 2199751,
        title: "La Jeune Fille à la perle",
        author: "Johannes Vermeer",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg",
        popularity: 6.6,
      },
      {
        id: 2199752,
        title: "La Naissance de Vénus",
        author: "Sandro Boticelli",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        popularity: 6.6,
      },
      {
        id: 2199753,
        title: "La nuit étoilée",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        popularity: 6.6,
      },
      {
        id: 2199754,
        title: "Le Baiser",
        author: "Gustav Klimt",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/597px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
        popularity: 6.6,
      },
      {
        id: 2199755,
        title: "Les Époux Arnolfini",
        author: "Jan van Eyck",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/438px-Van_Eyck_-_Arnolfini_Portrait.jpg",
        popularity: 6.6,
      },
      {
        id: 2199757,
        title: "Un dimanche après-midi à l'Île de la Grande Jatte",
        author: "Georges Seurat",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg/1280px-Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg",
        popularity: 6.6,
      },
      {
        id: 2199758,
        title: "Les Demoiselles d'Avignon",
        author: "Pablo Picasso",
        imageUrl:
          "https://media.timeout.com/images/103145336/630/472/image.jpg",
        popularity: 6.6,
      },
      {
        id: 2199759,
        title: "Composition en rouge, bleu et jaune",
        author: "Piet Mondrian",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/1024px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
        popularity: 6.6,
      },
      {
        id: 2199760,
        title: "Guernica",
        author: "Pablo Picasso",
        imageUrl:
          "https://www.museumtv.art/wp-content/uploads/2019/03/5.-Guernica.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 199751,
        title: "La Liberté guidant le peuple",
        author: "Eugène Delacroix",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1024px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199761,
        title: "Impression, soleil levant",
        author: "Claude Monet",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/1280px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199762,
        title: "Le Voyageur contemplant une mer de nuages",
        author: "Caspar David Fiedrich",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199763,
        title: "Nighthawks",
        author: "Edward Hopper",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/800px-Nighthawks_by_Edward_Hopper_1942.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199793,
        title: "La Cène",
        author: "Léonard de Vinci",
        imageUrl:
          "https://i.pinimg.com/originals/a4/96/3d/a4963d1b9e9dfde52d50430a713ae8f4.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199783,
        title: "Le Cri",
        author: "Edvard Munch",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199764,
        title: "La Persistance de la mémoire",
        author: "Salvador Dali",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199765,
        title: "Le Déjeuner des canotiers",
        author: "Auguste Renoir",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/1280px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199766,
        title: "La Danse",
        author: "Henri Matisse",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a7/Matissedance.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199767,
        title: "Les Hasards heureux de l'escarpolette",
        author: "Jean-Honoré Fragonard",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199778,
        title: "La Création d'Adam",
        author: "Michel-Ange",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/800px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199768,
        title: "Le fils de l'Homme",
        author: "René Magritte",
        imageUrl:
          "https://assets.catawiki.nl/assets/2019/1/8/b/f/d/bfdfa75e-f053-4f4f-8a78-a7dc0259d137.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199769,
        title: "American Gothic",
        author: "Grant Wood",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 2199769,
        title: "Terrasse du café le soir",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/800px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg",
        popularity: 6.5191472879404,
      },
      {
        id: 198933,
        title:
          "Sacre de l'empereur Napoléon et couronnement de l'impératrice Joséphine",
        author: "Jacques-Louis David",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/195338/l?t=jfzoUWShf-A0Bm3jhjotpg",
        popularity: 6.05678401322862,
      },
      {
        id: 204706,
        title: "Le Déjeuner sur l'herbe",
        author: "Edouard Manet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/710079/l?t=qoqmTiKagT1XoUoPjY9fJQ",
        popularity: 5.91350300563827,
      },
      {
        id: 211934,
        title: "Les Noces de Cana",
        author: "Paul Véronèse",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1066267/l?t=R87H7hr0VYaCjUNBDJJ2AQ",
        popularity: 5.90263333340137,
      },
      {
        id: 66051,
        title: "Olympia",
        author: "Edouard Manet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/82970/l?t=CXlEi8D4admIhhGYm_2asw",
        popularity: 5.89715386763674,
      },
      {
        id: 6876051,
        title: "Les Ménines",
        author: "Diego Velasquez",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
        popularity: 5.89715386763674,
      },
      {
        id: 66963,
        title: "Le radeau de la Méduse",
        author: "Théodore Géricault",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/983247/l?t=2KxGeb1aScjWfFAXYrob6A",
        popularity: 5.82894561761021,
      },
      {
        id: 204450,
        title: "La Vierge, l'Enfant Jésus et sainte Anne",
        author: "Léonard de Vinci",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/523539/l?t=Rf7ZSjVoISipJM-kSNd-4w",
        popularity: 5.73979291217923,
      },
      {
        id: 198582,
        title: "L'Atelier du peintre",
        author: "Gustave Courbet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/307777/l?t=Ra5Wf-nON1HTWF6yG9q7BA",
        popularity: 5.67675380226828,
      },
      {
        id: 205495,
        title: "La gare Saint-Lazare",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/145935/l?t=KqyHErByF_HkKNZReidWOQ",
        popularity: 5.65599181081985,
      },
      {
        id: 78644,
        title: "François Ier, roi de France",
        author: "Jean Clouet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/729065/l?t=b-7h6cdjjzUGvSeLqII0uA",
        popularity: 5.64897423816121,
      },
      {
        id: 198921,
        title: "Le Serment des Horaces",
        author: "Jacques-Louis David",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/195368/l?t=t24r84djTdkrPHJ7OcS8hw",
        popularity: 5.63478960316925,
      },
      {
        id: 1989288,
        title: "Ophelia",
        author: "John Everett Millais",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg/1280px-John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg",
        popularity: 5.63478960316925,
      },
      {
        id: 69885,
        title: "Nuit étoilée sur le Rhône",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/205698/l?t=Vok9mwcYzR8S2iRha0xaGQ",
        popularity: 5.51342874616498,
      },
      {
        id: 204000,
        title: "Le Tricheur à l'as de carreau",
        author: "Georges de La Tour",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1057046/l?t=mCFJOwLvsGq-mm59Goik1Q",
        popularity: 5.44241771052179,
      },
      {
        id: 20870,
        title: "La Leçon d'anatomie du docteur Tulp",
        author: "Rembrandt",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/1280px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
        popularity: 5.44241771052179,
      },
      {
        id: 2890870,
        title: "Nu Bleu",
        author: "Henri Matisse",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Matisse_Souvenir_de_Biskra.jpg/1280px-Matisse_Souvenir_de_Biskra.jpg",
        popularity: 5.44241771052179,
      },
      {
        id: 28988870,
        title: "Portrait de Louis XIV en costume de sacre",
        author: "Hyacinthe Rigaud",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/800px-Louis_XIV_of_France.jpg",
        popularity: 5.44241771052179,
      },
      {
        id: 2087870,
        title: "Les Tournesols",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/b4/Vincent_Willem_van_Gogh_128.jpg",
        popularity: 5.44241771052179,
      },
      {
        id: 203440,
        title: "Le Bain turc",
        author: "Jean-Auguste-Dominique Ingres",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/256765/l?t=93ZjDY-XBhzQnc3LdXsgzg",
        popularity: 5.4380793089232,
      },
      {
        id: 72075,
        title: "Le Bassin aux nymphéas : harmonie verte",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1284166/l?t=C3R2nAtgb207nPLJ0sz9Ug",
        popularity: 5.3890717298165,
      },
      {
        id: 72183,
        title: "Le Verrou",
        author: "Jean-Honoré Fragonard",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/419876/l?t=mkQLP3dJVBOPt2ojhBhIwA",
        popularity: 5.38449506278909,
      },
      {
        id: 725183,
        title: "Rue de Paris, temps de pluie",
        author: "Gustave Caillebotte",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Caillebotte_Rue_de_Paris.jpg/1280px-Caillebotte_Rue_de_Paris.jpg",
        popularity: 5.38449506278909,
      },
      {
        id: 7251883,
        title: "Moi et le village",
        author: "Marc Chagall",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/e/e7/Chagall_IandTheVillage.jpg",
        popularity: 5.38449506278909,
      },
      {
        id: 66023,
        title: "Coquelicots, environs d'Argenteuil",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/440885/l?t=ymuRcBm805pU-cpFZ6qBMA",
        popularity: 5.34233425196481,
      },
      {
        id: 2199756,
        title: "Le Jardin des délices",
        author: "Jérôme Bosch",
        imageUrl:
          "http://comprendrelapeinture.com/wp-content/uploads/2017/01/jardin-des-d%C3%A9lices-1024x579.jpg",
        popularity: 6.6,
      },
      {
        id: 66056,
        title: "Emile Zola",
        author: "Edouard Manet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/313307/l?t=7hiomwHJUhK4cjh6YGA_0w",
        popularity: 5.32787616878958,
      },
      {
        id: 199716,
        title: "Femmes d'Alger dans leur appartement",
        author: "Eugène Delacroix",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1288126/l?t=QWyGgzmj1eqrX_oa588Ezw",
        popularity: 5.25749537202778,
      },
      {
        id: 71844,
        title: "Bal du Moulin de la Galette, Montmartre",
        author: "Auguste Renoir",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1286086/l?t=L9MWFZtduXJlN5s7SyS-1w",
        popularity: 5.23644196282995,
      },
      {
        id: 204456,
        title: "La Joconde",
        author: "Léonard de Vinci",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/503545/l?t=SdEilsqPCIuEWjv1EJndNw",
        popularity: 5.21493575760899,
      },
      {
        id: 211087,
        title:
          "Colbert présente à Louis XIV les membres de l'Académie Royale des Sciences créée en 1667",
        author: "Henri Testelin",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/186381/l?t=bqgZUVPTODPtcmPC-3aFQA",
        popularity: 5.19295685089021,
      },
      {
        id: 211384,
        title: "La Chambre de Van Gogh à Arles",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/103406/l?t=HVl5frRjjtKeRjq285fY7w",
        popularity: 5.18738580584075,
      },
      {
        id: 211368,
        title: "La Vierge du chancelier Rolin",
        author: "Jan Van Eyck",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/294416/l?t=yKEHrTxvrQFuRLjfGLScwg",
        popularity: 5.14749447681345,
      },
      {
        id: 209477,
        title: "Bethsabée au bain",
        author: "Rembrandt",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/991838/l?t=qFYzGuu1s7TBi-crsPs2cQ",
        popularity: 5.10594547390058,
      },
      {
        id: 209877,
        title: "La Mort de Marat",
        author: "Jacques-Louis David",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/800px-Death_of_Marat_by_David.jpg",
        popularity: 5.10594547390058,
      },
      {
        id: 199604,
        title: "La Mort de Sardanapale",
        author: "Eugène Delacroix",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/194931/l?t=79BzGMessKXINkNKujZO8A",
        popularity: 5.08759633523238,
      },
      {
        id: 205623,
        title: "Les glaneuses",
        author: "Jean-François Millet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/190459/l?t=zr1jxnyXDCscQuJdiOZ-JQ",
        popularity: 5.08140436498446,
      },
      {
        id: 211414,
        title: "Autoportrait",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/150682/l?t=xkDCQYgv1uYju5cDW0WxnQ",
        popularity: 5.07517381523383,
      },
      {
        id: 205108,
        title: "Le Prêteur et sa femme",
        author: "Quentin Metsys",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/891110/l?t=e5Tt7SE784pi6onJaTtiQA",
        popularity: 5.00394630594546,
      },
      {
        id: 198560,
        title: "Un enterrement à Ornans",
        author: "Gustave Courbet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/307837/l?t=MKAmhSIZv01S37EPliRMbA",
        popularity: 4.98360662170834,
      },
      {
        id: 197458,
        title: "La Mort de la Vierge",
        author: "Le Caravage",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/196404/l?t=OlZq6QOZUyiruXB8RdAeqA",
        popularity: 4.97673374242057,
      },
      {
        id: 197477858,
        title: "Autoportrait en apôtre Paul",
        author: "Rembrandt",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rembrandt_Harmensz._van_Rijn_-_Zelfportret_als_de_apostel_Paulus_-_Google_Art_Project.jpg/800px-Rembrandt_Harmensz._van_Rijn_-_Zelfportret_als_de_apostel_Paulus_-_Google_Art_Project.jpg",
        popularity: 4.97673374242057,
      },
      {
        id: 73300,
        title: "L'astronome",
        author: "Johannes Vermeer",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1061142/l?t=LX_GdXlzE9EbQhcV_fd5Hw",
        popularity: 4.96284463025991,
      },
      {
        id: 69121,
        title: "Les Sabines",
        author: "Jacques-Louis David",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/215082/l?t=OUwkLCPa5i7FPiW6IK26Iw",
        popularity: 4.96284463025991,
      },
      {
        id: 212389,
        title: "La Charmeuse de serpents",
        author: "Henri Rousseau",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/268476/l?t=XbjJRf5dEYxNzbY2M-D_4g",
        popularity: 4.94875989037817,
      },
      {
        id: 86837,
        title: "Le Printemps",
        author: "Giuseppe Arcimboldo",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/686024/l?t=sE9jy6H9P3VGYnZHrFlOPg",
        popularity: 4.9416424226093,
      },
      {
        id: 197167,
        title: "Les Raboteurs de parquet",
        author: "Gustave Caillebotte",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/59427/l?t=p6Q1jt6LUKvhXbpOpKRbtA",
        popularity: 4.93447393313069,
      },
      {
        id: 212157,
        title: "Pierrot, dit autrefois Gilles",
        author: "Antoine Watteau",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/921121/l?t=aaLnQqgNmdY9ZxHm3wCaEA",
        popularity: 4.91998092582813,
      },
      {
        id: 211011,
        title: "Le Concert champêtre",
        author: "Titien",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1068141/l?t=uMEYgAN7H1SvIkRT8H5TdQ",
        popularity: 4.91998092582813,
      },
      {
        id: 201453,
        title: "Un atelier aux Batignolles",
        author: "Ignace Henri Jean Théodore Fantin-Latour",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/145942/l?t=VXmBP0EUw9Ejy8ICDRo-OA",
        popularity: 4.86753445045558,
      },
      {
        id: 201453,
        title:
          "Les Cosaques zaporogues écrivant une lettre au sultan de Turquie",
        author: "Ilia Répine",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ilja_Jefimowitsch_Repin_-_Reply_of_the_Zaporozhian_Cossacks_-_Yorck.jpg/1280px-Ilja_Jefimowitsch_Repin_-_Reply_of_the_Zaporozhian_Cossacks_-_Yorck.jpg",
        popularity: 4.86753445045558,
      },
      {
        id: 201453,
        title: "Autoportrait aux besicles",
        author: "Jean Siméon Chardin",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chardin_pastel_selfportrait.jpg/800px-Chardin_pastel_selfportrait.jpg",
        popularity: 4.86753445045558,
      },
      {
        id: 75673,
        title: "Le jardin de l'artiste à Giverny",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/447312/l?t=l7H4Cwkrw3YbyfvPn2Qymg",
        popularity: 4.84418708645859,
      },
      {
        id: 76532,
        title: "Portrait d'un vieillard et d'un jeune garçon",
        author: "Domenico Ghirlandaio",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/206392/l?t=MGYQy2h4HU2sqrM-V_l6ng",
        popularity: 4.84418708645859,
      },
      {
        id: 240613,
        title: "Le Joueur de fifre",
        author: "Edouard Manet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/714395/l?t=5dg9UA8rYgYpKsyzyZpzow",
        popularity: 4.83628190695148,
      },
      {
        id: 202236,
        title: "Bataille d'Austerlitz, 2 décembre 1805",
        author: "François Pascal Simon Gérard",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/193105/l?t=YLYgMH33AtRrr4-S_xiVzw",
        popularity: 4.83628190695148,
      },
      {
        id: 203989,
        title: "Saint Joseph charpentier",
        author: "Georges de La Tour",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/728935/l?t=zcSjZBAGyJdd6nPWwcVB_w",
        popularity: 4.8283137373023,
      },
      {
        id: 72295,
        title: "Arearea (Joyeusetés)",
        author: "Paul Gauguin",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/211594/l?t=MyFqaXppUH0-tBhxnrt5jw",
        popularity: 4.82028156560504,
      },
      {
        id: 205610,
        title: "L'Angélus",
        author: "Jean-François Millet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/82974/l?t=MUmO52qMcOoTZE3gCqYfBA",
        popularity: 4.82028156560504,
      },
      {
        id: 210900,
        title:
          "La Bataille San Romano : la contre attaque de Micheletto da Cotignola",
        author: "Uccello",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/151151/l?t=OccDp9oc7aBppw3rbJAHTQ",
        popularity: 4.80402104473326,
      },
      {
        id: 228258,
        title: "La Méridienne dit aussi La Sieste",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/546289/l?t=jE41C6SvDUB_LOIniSkjvw",
        popularity: 4.80402104473326,
      },
      {
        id: 75737,
        title: "La classe de danse",
        author: "Edgar Degas",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/207661/l?t=f0kjHKda-_1ols961_7QMQ",
        popularity: 4.80402104473326,
      },
      {
        id: 119186,
        title: "Le Déjeuner d'huîtres",
        author: "Jean-François de Troy",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/76427/l?t=8TgOCr-CS5tSYnuxyi7xpA",
        popularity: 4.77068462446567,
      },
      {
        id: 209482,
        title: "Le Boeuf écorché",
        author: "Rembrandt",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/702880/l?t=mmnZMzaW1uLUmhCvNtT_dA",
        popularity: 4.7361984483945,
      },
      {
        id: 206024,
        title:
          "Scène des massacres de Scio : familles grecques attendant la mort ou l'esclavage",
        author: "Eugène Delacroix",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/74661/l?t=h5N8HNQ-Cxy3DV6_WJtXaw",
        popularity: 4.72738781871234,
      },
      {
        id: 199711,
        title: "La Barque de Dante",
        author: "Eugène Delacroix",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1288027/l?t=e6YKi1vnYUTYQ1rVq2Xxyg",
        popularity: 4.70048036579242,
      },
      {
        id: 204471,
        title: "La Belle Ferronnière",
        author: "Léonard de Vinci",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1049214/l?t=q_jXxi4NF8VMB7bZ4-XR3w",
        popularity: 4.69134788222914,
      },
      {
        id: 202588,
        title: "Bonaparte au pont d'Arcole",
        author: "Antoine-Jean Gros",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1157990/l?t=YUqUvf_PJVNjKWNxnz5QQA",
        popularity: 4.67282883446191,
      },
      {
        id: 72078,
        title: "La balançoire",
        author: "Auguste Renoir",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/211999/l?t=6KRUoP_RNhuzt935oSEb7w",
        popularity: 4.67282883446191,
      },
      {
        id: 203433,
        title: "Baigneuse de Valpinçon",
        author: "Jean-Auguste-Dominique Ingres",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/925427/l?t=87hO_-o4FzE3Lpotdm9FDQ",
        popularity: 4.67282883446191,
      },
      {
        id: 205615,
        title:
          "Louis XVI donnant ses instructions au capitaine de vaisseau La Pérouse",
        author: "Nicolas André Monsiau",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/190541/l?t=WL3gEMBIKUFVfcwLXqqLcQ",
        popularity: 4.65396035015752,
      },
      {
        id: 197128,
        title: "Naissance de Vénus",
        author: "Alexandre Cabanel",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/66220/l?t=s8p32SlaOpedALZxbd3bAw",
        popularity: 4.62497281328427,
      },
      {
        id: 228248,
        title: "L'Église d'Auvers-sur-Oise",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/43138/l?t=8wMkpXZ2c65RROUqLHZ3LQ",
        popularity: 4.62497281328427,
      },
      {
        id: 197653,
        title: "La Montagne Sainte-Victoire",
        author: "Paul Cézanne",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/639433/l?t=CrCUkrpdPbZvzfHCfzBvNg",
        popularity: 4.61512051684126,
      },
      {
        id: 199060,
        title: "L'orchestre de l'Opéra",
        author: "Edgar Degas",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/67819/l?t=o3iQQKKTteY2xqFXv8oLwQ",
        popularity: 4.61512051684126,
      },
      {
        id: 70878,
        title:
          "Marie-Antoinette de Lorraine-Habsbourg, reine de France et ses enfants",
        author: "Louise-Elisabeth Vigée Le Brun",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/213183/l?t=E7zS_VHiDZRsymUFdRxMeA",
        popularity: 4.60517018598809,
      },
      {
        id: 86843,
        title: "L'Hiver",
        author: "Giuseppe Arcimboldo",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/131029/l?t=_JdUYRwRS--WGxa7HN7LDQ",
        popularity: 4.59511985013459,
      },
      {
        id: 209522,
        title: "Danse à la campagne",
        author: "Auguste Renoir",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/162878/l?t=vP4_V3f9eKGpFMWCYb6y1Q",
        popularity: 4.59511985013459,
      },
      {
        id: 211846,
        title: "Intérieur du port de Marseille",
        author: "Joseph Vernet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/185978/l?t=O_aOytuw-UyeMujG58zaAw",
        popularity: 4.59511985013459,
      },
      {
        id: 205524,
        title: "Londres, le Parlement, trouée de soleil dans le brouillard",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/164405/l?t=JsWkAZAo_rrXs5FuQfW7cQ",
        popularity: 4.58496747867057,
      },
      {
        id: 196528,
        title: "La Nef des fous",
        author: "Jérôme Bosch",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1035129/l?t=xIjTTWkxYKyJ7dyCQzzB0A",
        popularity: 4.58496747867057,
      },
      {
        id: 210392,
        title: "Le Talisman, l'Aven au Bois d'Amour, Pont-Aven",
        author: "Paul Sérusier",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/304644/l?t=1XlRinTqPDQ4lUiorobsXw",
        popularity: 4.57471097850338,
      },
      {
        id: 198917,
        title: "Les Licteurs rapportent à Brutus les corps de ses fils",
        author: "Jacques-Louis David",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/195594/l?t=KqkvPBBbWQZFtnn0_NGTNQ",
        popularity: 4.57471097850338,
      },
      {
        id: 205471,
        title: "Le déjeuner sur l'herbe, à Chailly",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/735262/l?t=_N0qTqUIN7HIhgYfSZRbTA",
        popularity: 4.56434819146784,
      },
      {
        id: 212164,
        title: "Arrangement en gris et noir n° 1, ou la mère de l'artiste",
        author: "James Abbott Mac Neil Whistler",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/164111/l?t=u4j9NS2oEbBjlsWop3rg4Q",
        popularity: 4.56434819146784,
      },
      {
        id: 204231,
        title: "Bataille de la Moskowa, le 7 septembre 1812",
        author: "Louis François Lejeune",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/899708/l?t=4fSeO6X8g3vSQcjtjR932g",
        popularity: 4.55387689160054,
      },
      {
        id: 202015,
        title: "Femmes de Tahiti",
        author: "Paul Gauguin",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/125973/l?t=nj8Zfs23KmI5WcfWZYsgpg",
        popularity: 4.55387689160054,
      },
      {
        id: 211519,
        title: "L'Annonciation",
        author: "Rogier Van der Weyden",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1286591/l?t=yVH4QBbsD-VxvP4Hv1_pcQ",
        popularity: 4.54329478227,
      },
      {
        id: 261398,
        title: "Le Nouveau-né",
        author: "Georges de La Tour",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/234802/l?t=FIJp_O_zi9wDs4pS15hJHQ",
        popularity: 4.53259949315326,
      },
      {
        id: 72634,
        title: "Les meules; fin de l'été, Giverny",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/435071/l?t=bV5lYWeCz66TqsY0oZYKOQ",
        popularity: 4.53259949315326,
      },
      {
        id: 201422,
        title: "Hommage à Delacroix",
        author: "Ignace Henri Jean Théodore Fantin-Latour",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/161415/l?t=1YZujCAMm4PB5OLWN2Cq8Q",
        popularity: 4.52178857704904,
      },
      {
        id: 198655,
        title: "La Rencontre dit aussi Bonjour Monsieur Courbet",
        author: "Gustave Courbet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/195800/l?t=MxqRDNJzpzXJtwgM2Xn_lw",
        popularity: 4.51085950651685,
      },
      {
        id: 205708,
        title: "Cathédrale de Rouen, le portail, soleil matinal harmonie bleue",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1134402/l?t=meHC9wGucOMbAqBcnVOfHQ",
        popularity: 4.51085950651685,
      },
      {
        id: 87423,
        title: "L'Atelier de Bazille, 9 rue de la Condamine à Paris",
        author: "Jean Frédéric Bazille",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/47943/l?t=TUfP6PsHxMeGZwuMY1Us2Q",
        popularity: 4.51085950651685,
      },
      {
        id: 203993,
        title: "La Madeleine à la veilleuse",
        author: "Georges de La Tour",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1034522/l?t=74bDGm1YPqsHlOwLT0P19w",
        popularity: 4.51085950651685,
      },
      {
        id: 203973,
        title: "L'Adoration des bergers",
        author: "Georges de La Tour",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1059965/l?t=bkHefJuuXQS321TBjP7VpA",
        popularity: 4.49980967033027,
      },
      {
        id: 67456,
        title: "L'enlèvement des Sabines",
        author: "Nicolas Poussin",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/757807/l?t=k6mfpMGEgM0Wj9RxV9nDtA",
        popularity: 4.49980967033027,
      },
      {
        id: 197818,
        title: "Les Joueurs de cartes",
        author: "Paul Cézanne",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/96974/l?t=Z6d4-1ZxaNlC6c09lYEB7w",
        popularity: 4.49980967033027,
      },
      {
        id: 203958,
        title:
          "Bonaparte, Premier consul, franchissant le Grand Saint-Bernard, 20 mai 1800",
        author: "Jacques-Louis David",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1255564/l?t=bI8M3muhsgUA0eXErUUVtQ",
        popularity: 4.49980967033027,
      },
      {
        id: 196762,
        title:
          "Le Dix Huit Brumaire, 10 novembre 1799. Bonaparte au conseil des Cinq-Cents à Saint-Cloud",
        author: "François Bouchot",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/196854/l?t=F9gL7AvV8a9E3-AQ5dfN0w",
        popularity: 4.48863636973214,
      },
      {
        id: 197863,
        title: "Nature morte au panier ou La Table de cuisine",
        author: "Paul Cézanne",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/196232/l?t=WttuBVn-Sqj6pKWrutb55A",
        popularity: 4.48863636973214,
      },
      {
        id: 239248,
        title: "La Grande Vague de Kanagawa",
        author: "Katsushika Hokusai",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/136245/l?t=tqDWE1v6-g3yK0ct0jUyxA",
        popularity: 4.48863636973214,
      },
      {
        id: 161046,
        title: "Déclaration des droits de l'Homme et du Citoyen",
        author: "Jean-Jacques François Le Barbier, l'Aîné",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/60013/l?t=8-CWjHZZczGQ3Zxh08lRUA",
        popularity: 4.48863636973214,
      },
      {
        id: 229041,
        title: "Berthe Morisot au bouquet de violettes",
        author: "Edouard Manet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/202924/l?t=iZe8v_06xOdZJZyaM6iHTg",
        popularity: 4.48863636973214,
      },
      {
        id: 211418,
        title: "Le Docteur Paul Gachet",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/150781/l?t=1WusMLSwexR4N5vl2cKaJQ",
        popularity: 4.47733681447821,
      },
      {
        id: 70723,
        title: "Le Couronnement de la Vierge",
        author: "Fra Angelico",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/213441/l?t=TgT0cDy8emCLqFZkm5xsUQ",
        popularity: 4.47733681447821,
      },
      {
        id: 74606,
        title: "Le déjeuner",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/440921/l?t=wm8Ls0XrC0d5aX_vTMcYpQ",
        popularity: 4.46590811865458,
      },
      {
        id: 67844,
        title:
          "Essai de figure en plein air : femme à l'ombrelle tournée vers la gauche",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1093588/l?t=K_S8OWL8QNqHh_XMFt7UaA",
        popularity: 4.46590811865458,
      },
      {
        id: 199635,
        title: "Portrait de l'artiste",
        author: "Eugène Delacroix",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/686077/l?t=uwtIAlyj1_FjVCelQTeY0A",
        popularity: 4.46590811865458,
      },
      {
        id: 205508,
        title: "Hôtel des Roches Noires, Trouville",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/110080/l?t=FM1VQ5X6-Bq-BuVIWoVRGA",
        popularity: 4.44265125649032,
      },
      {
        id: 69113,
        title: "Homère déifié dit aussi l'apothéose d'Homère",
        author: "Jean-Auguste-Dominique Ingres",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/215075/l?t=lugaZls7RzxDL0C2XmwdtA",
        popularity: 4.44265125649032,
      },
      {
        id: 68661,
        title: "Campagne de France, 1814",
        author: "Jean-Louis-Ernest Meissonier",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1105767/l?t=9HqhTZc7EHLBZopUGQKd8Q",
        popularity: 4.43081679884331,
      },
      {
        id: 69356,
        title: "Le déjeuner",
        author: "François Boucher",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/919397/l?t=YiXiENUWYgNQAosTgIL0JA",
        popularity: 4.4188406077966,
      },
      {
        id: 72047,
        title: "Hommage à Cézanne",
        author: "Maurice Denis",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/568133/l?t=TOITQq-k-VYHTCnZCBgDrg",
        popularity: 4.4188406077966,
      },
      {
        id: 65258,
        title: "Autoportrait au Christ jaune",
        author: "Paul Gauguin",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/193049/l?t=Ac9s1p44ENxj8aMtr4o29g",
        popularity: 4.40671924726425,
      },
      {
        id: 206140,
        title: "Le berceau",
        author: "Berthe Morisot",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1047035/l?t=OckBaT6KqeXGzd9WDXWDsg",
        popularity: 4.40671924726425,
      },
      {
        id: 197991,
        title: "Le cardinal de Richelieu",
        author: "Philippe de Champaigne",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1249276/l?t=pele5Iesiezjnc2Yz9RSqg",
        popularity: 4.39444915467244,
      },
      {
        id: 209605,
        title: "Jeunes filles au piano",
        author: "Auguste Renoir",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/119368/l?t=kT9iNw2LIPk5AyrqXnkbQQ",
        popularity: 4.39444915467244,
      },
      {
        id: 206446,
        title:
          "Le Thé à l'anglaise servi dans le salon des Quatre-Glaces au palais du Temple à Paris en 1764",
        author: "Michel Barthélemy Ollivier",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/189846/l?t=E0L1TLBEh-LtXB5q__1PlQ",
        popularity: 4.36944785246702,
      },
      {
        id: 76949,
        title: "Jean-Baptiste Colbert",
        author: "Claude Lefebvre",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/206280/l?t=kyBNGs3Mtg50zg7iGNLP_w",
        popularity: 4.36944785246702,
      },
      {
        id: 204660,
        title: "Le Balcon",
        author: "Edouard Manet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/454921/l?t=40p6J8HsTXdmktOung-N8g",
        popularity: 4.36944785246702,
      },
      {
        id: 68687,
        title: "Orphée",
        author: "Gustave Moreau",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/215651/l?t=9OhTpOgd5c4-8Bpv6VxXMw",
        popularity: 4.35670882668959,
      },
      {
        id: 201752,
        title:
          "Portrait d'homme de lettres, anciennement identifié à Denis Diderot",
        author: "Jean-Honoré Fragonard",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1135234/l?t=5ZB6p7h5ZHnU4lLUKzqUsg",
        popularity: 4.33073334028633,
      },
      {
        id: 211407,
        title: "Autoportrait",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/150748/l?t=dIKj8ziGciz0sHfJQXEEQQ",
        popularity: 4.33073334028633,
      },
      {
        id: 72770,
        title:
          "Assassinat d'Henri IV et arrestation de Ravaillac le 14 mai 1610",
        author: "Charles-Gustave Housez",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/211307/l?t=FJatQpTjBZ47YSUZJBExDQ",
        popularity: 4.31748811353631,
      },
      {
        id: 197807,
        title: "L'Estaque - Vue du Golfe de Marseille",
        author: "Paul Cézanne",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/231437/l?t=_5sv80EDCznDMLFG8JXIHA",
        popularity: 4.31748811353631,
      },
      {
        id: 65888,
        title: "Naissance de Vénus",
        author: "William Adolphe Bouguereau",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/218333/l?t=qbayot-4rLSP1ILdtmP0fQ",
        popularity: 4.31748811353631,
      },
      {
        id: 209486,
        title: "Portrait de l'artiste au chevalet",
        author: "Rembrandt",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1111688/l?t=sLLgHWXCXzaIAafXdKRsuw",
        popularity: 4.29045944114839,
      },
      {
        id: 209195,
        title: "Pietà de Villeneuve-lès-Avignon",
        author: "Enguerrand Quarton",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/187633/l?t=xRwiVOq28KPrNZFc69jeIQ",
        popularity: 4.27666611901606,
      },
      {
        id: 198525,
        title: "Les Romains de la Décadence",
        author: "Thomas Couture",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/195719/l?t=ly9-ZMdjf3V1n8Pd_YwVHw",
        popularity: 4.27666611901606,
      },
      {
        id: 209526,
        title: "Danse à la ville",
        author: "Auguste Renoir",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/162882/l?t=rjcN_op8rYbie_4n8yuCDg",
        popularity: 4.27666611901606,
      },
      {
        id: 87814,
        title: "Portrait de Marcel Proust",
        author: "Jacques Emile Blanche",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/119326/l?t=nB35_ri9PoQcLrjIh6s-mQ",
        popularity: 4.26267987704132,
      },
      {
        id: 203478,
        title: "Roger délivrant Angélique",
        author: "Jean-Auguste-Dominique Ingres",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1102921/l?t=0AM6qwA41CqEDVf1csnDWQ",
        popularity: 4.26267987704132,
      },
      {
        id: 201616,
        title: "Portrait de Charles VII",
        author: "Jean Fouquet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1280318/l?t=ZrUzsVOFy6eMrviRTsUyNg",
        popularity: 4.26267987704132,
      },
      {
        id: 69100,
        title: "Atala au tombeau dit aussi Funérailles d'Atala",
        author: "Anne-Louis Girodet De Roussy-Trioson",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/215071/l?t=qPkr8rdBPtnH5758f4jlEA",
        popularity: 4.24849524204936,
      },
      {
        id: 66035,
        title: "Femmes au jardin",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/313324/l?t=2OtjM6pMiksJPZOpBWaPZA",
        popularity: 4.24849524204936,
      },
      {
        id: 198045,
        title:
          "La Famille du duc de Penthièvre en 1768 dit aussi La Tasse de Chocolat",
        author: "Jean-Baptiste Charpentier, le Vieux",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/196091/l?t=fFeM_OgE__LWZ-lw374DFA",
        popularity: 4.24849524204936,
      },
      {
        id: 242928,
        title: "L'Homme au gant",
        author: "Titien",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/405361/l?t=dX1ejY-xf5xB60OTLQWxEg",
        popularity: 4.24849524204936,
      },
      {
        id: 66713,
        title: "Clovis, roi des Francs",
        author: "François-Louis Dejuinne",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/217441/l?t=lP0UDGvpoX6L1rEdOtbpdQ",
        popularity: 4.24849524204936,
      },
      {
        id: 113676,
        title: "Les Cribleuses de blé",
        author: "Gustave Courbet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/116189/l?t=Fbb1BeshGTQc2JXfBKsxfA",
        popularity: 4.24849524204936,
      },
      {
        id: 72355,
        title: "L'Origine du monde",
        author: "Gustave Courbet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/447319/l?t=In0nptv8XjykBk3aOYoojQ",
        popularity: 4.23410650459726,
      },
      {
        id: 204775,
        title: "Stéphane Mallarmé",
        author: "Edouard Manet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1134432/l?t=p1AacVurLGpKP1eYvqWSRA",
        popularity: 4.23410650459726,
      },
      {
        id: 204876,
        title: "Saint Sébastien",
        author: "Andrea Mantegna",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/334541/l?t=8Ah2_cRFP0-1gYBkihDcnw",
        popularity: 4.23410650459726,
      },
      {
        id: 205209,
        title:
          "Entrée de Napoléon Ier entouré de son Etat major dans Berlin, 27 octobre 1806",
        author: "Charles Meynier",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/689872/l?t=1vVBebfL_hfSadX3DS-_WA",
        popularity: 4.23410650459726,
      },
      {
        id: 160583,
        title: "Les demoiselles du bord de la Seine",
        author: "Gustave Courbet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/59287/l?t=TyN3l6Z7Ph5UPywISHMzwA",
        popularity: 4.21950770517611,
      },
      {
        id: 204912,
        title:
          "André le Nôtre, contrôleur des Bâtiments et dessinateur des Jardins du Roi",
        author: "Carlo Maratta",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/191179/l?t=KERVquL37gsV_A0v1VmoqA",
        popularity: 4.21950770517611,
      },
      {
        id: 205098,
        title: "Bataille de Valmy",
        author: "Jean-Baptiste Mauzaisse",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/190700/l?t=PMKBqztGM322r320IRG1kw",
        popularity: 4.21950770517611,
      },
      {
        id: 210545,
        title: "La neige à Louveciennes",
        author: "Alfred Sisley",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1134421/l?t=VmK3T-JjDRWr_AltIlNsww",
        popularity: 4.21950770517611,
      },
      {
        id: 243264,
        title: "Napoléon Ier couronné par le Temps, écrit le Code Civil",
        author: "Jean-Baptiste Mauzaisse",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/164184/l?t=xSo-sVr2B6V9HzDtUqWhBA",
        popularity: 4.20469261939097,
      },
      {
        id: 87403,
        title: "Réunion de famille",
        author: "Jean Frédéric Bazille",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/109458/l?t=-7bxvyyUSHMUKxC4GVCODQ",
        popularity: 4.20469261939097,
      },
      {
        id: 123799,
        title: "Album de treize estampes érotiques",
        author: "Hosoda Eiri",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/101795/l?t=TK_OBD6jQvmOiZzAMH2OKg",
        popularity: 4.20469261939097,
      },
      {
        id: 204076,
        title: "Le Chancelier Séguier",
        author: "Charles Le Brun",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/161211/l?t=rmRkJa5EvhgUkuQet3L0gA",
        popularity: 4.20469261939097,
      },
      {
        id: 205607,
        title: "Nymphéas bleus",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/435077/l?t=WvmMeg7r0f2A2LJ4NY4okQ",
        popularity: 4.18965474202643,
      },
      {
        id: 203053,
        title:
          "Charles X distribuant des récompenses aux artistes, à la fin du Salon de 1824 au Louvre",
        author: "François Joseph Heim",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/925334/l?t=7evmzO_YbumhKJcbphKUyQ",
        popularity: 4.18965474202643,
      },
      {
        id: 205179,
        title:
          "La Barricade, rue de la Mortellerie, juin 1848, dit aussi Souvenir de guerre civile",
        author: "Jean-Louis-Ernest Meissonier",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/190890/l?t=rMgcrvY7iw0BHJBJq7ObNA",
        popularity: 4.17438726989564,
      },
      {
        id: 77969,
        title: "L'odalisque",
        author: "François Boucher",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/888278/l?t=bQ9wGdTOcCmVRZ0OhaPaqw",
        popularity: 4.17438726989564,
      },
      {
        id: 211398,
        title: "Portrait d'Eugène Boch, peintre belge",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/43121/l?t=Y2rgNeK0cDjpp1m_6cRfww",
        popularity: 4.17438726989564,
      },
      {
        id: 198798,
        title:
          "Séance d'ouverture de l'Assemblée des états généraux, 5 mai 1789",
        author: "Louis Charles Auguste Couder",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/195955/l?t=WNYGUcRAQR8_QZNGQnYtoQ",
        popularity: 4.15888308335967,
      },
      {
        id: 206301,
        title:
          "La Famille de Louis XIV en 1670 représentée en Travestis mythologiques",
        author: "Jean Nocret",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/189696/l?t=Uabaa_3z8y5TQqsAQwQX2g",
        popularity: 4.15888308335967,
      },
      {
        id: 74915,
        title:
          "Jeanne d'Arc au sacre du roi Charles VII dans la cathédrale de Reims",
        author: "Jean-Auguste-Dominique Ingres",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1103005/l?t=VK3x4VGvIzZZTQQse2adfA",
        popularity: 4.15888308335967,
      },
      {
        id: 67840,
        title:
          "Essai de figure en plein air : femme à l'ombrelle tournée vers la droite",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1093587/l?t=hz6UR3Ao113roauhL7bTgQ",
        popularity: 4.14313472639153,
      },
      {
        id: 69093,
        title: "Endymion, effet de lune dit aussi Le Sommeil d'Endymion",
        author: "Anne-Louis Girodet De Roussy-Trioson",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/215067/l?t=tfbRqrkR7i5A12EpOI7rgQ",
        popularity: 4.14313472639153,
      },
      {
        id: 202893,
        title:
          "Bonaparte haranguant l'armée avant la bataille des Pyramides, 21 juillet 1798",
        author: "Antoine-Jean Gros",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/192433/l?t=-ie3ywwLPbAlOhMW4wqelQ",
        popularity: 4.14313472639153,
      },
      {
        id: 77178,
        title: "Fritillaires couronne impériale dans un vase de cuivre",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/205969/l?t=v_4hCPOnDrBzIXUEJFJTkA",
        popularity: 4.12713438504509,
      },
      {
        id: 77449,
        title: "Portrait de Baldassare Castiglione",
        author: "Raphaël",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/482420/l?t=7lP0Vcy4GZ5q7uNPQRHmcQ",
        popularity: 4.12713438504509,
      },
      {
        id: 210053,
        title:
          "La Galerie Médicis : Le Débarquement de Marie de Médicis au port de Marseille, le 3 novembre 1600",
        author: "Pierre Paul Rubens",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/57278/l?t=4CRI4G7Gy2nwgcyYlOCKJg",
        popularity: 4.12713438504509,
      },
      {
        id: 87061,
        title: "Philippe II dit Philippe-Auguste, roi de France",
        author: "Louis-Félix Amiel",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/197818/l?t=gjjb9y1SGOYUBSfqptv9wA",
        popularity: 4.12713438504509,
      },
      {
        id: 204652,
        title: "Repas de paysans",
        author: "Louis Le Nain",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/991828/l?t=B3Kgh6A-coK3bowtehBnyg",
        popularity: 4.12713438504509,
      },
      {
        id: 75100,
        title: "Officier de chasseurs à cheval de la garde impériale chargeant",
        author: "Théodore Géricault",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/208645/l?t=VtzI03fn7jL1yxKBp-ICZQ",
        popularity: 4.11087386417331,
      },
      {
        id: 196724,
        title: "Bain de Diane",
        author: "François Boucher",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/712180/l?t=waX-OXeIa5DH7hPp1PU69A",
        popularity: 4.11087386417331,
      },
      {
        id: 199073,
        title:
          "Première distribution des croix de la Légion d'Honneur en l'église des Invalides le 14 juillet 1804",
        author: "Jean-Baptiste Debret",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/195406/l?t=tXAfVjEhIwg-53bsZAuhWw",
        popularity: 4.11087386417331,
      },
      {
        id: 223959,
        title: "Portrait de Mme de Senonnes",
        author: "Jean-Auguste-Dominique Ingres",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/106241/l?t=5nLU0mnH9dcCYNb6XOtznQ",
        popularity: 4.11087386417331,
      },
      {
        id: 66922,
        title: "La salle de danse à Arles",
        author: "Vincent Van Gogh",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/217252/l?t=GIlT-NB6x8de0c3o8CPFUQ",
        popularity: 4.11087386417331,
      },
      {
        id: 204222,
        title:
          "Bivouac de Napoléon Ier à la veille de la bataille d'Austerlitz",
        author: "Louis François Lejeune",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/191485/l?t=Ua9mpUeVttG4qNbt403W9A",
        popularity: 4.11087386417331,
      },
      {
        id: 71966,
        title: "Un après-dîner à Ornans",
        author: "Gustave Courbet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/211860/l?t=aQL5ADBHhpytmXUhaV4jmw",
        popularity: 4.0943445622221,
      },
      {
        id: 198727,
        title: "Les îles d'Or, îles d'Hyères",
        author: "Henri Edmond Cross",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/460470/l?t=AHOqrECBLC_FDg4PuoeliQ",
        popularity: 4.0943445622221,
      },
      {
        id: 210543,
        title: "Bataille de Poitiers, octobre 732",
        author: "Charles de Steuben",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/186423/l?t=nJZbem8BkS2Cbgs-yxL6bg",
        popularity: 4.0943445622221,
      },
      {
        id: 75702,
        title: "Le Défilé, dit aussi Chevaux de course devant les tribunes",
        author: "Edgar Degas",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/345579/l?t=3AyKgTJNZNDK_Mbo8fktpw",
        popularity: 4.0943445622221,
      },
      {
        id: 197001,
        title: "La chute des damnés",
        author: "Dieric Bouts, le Vieux",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/153671/l?t=7yPzgMUK13yU5XgL83yzEw",
        popularity: 4.0943445622221,
      },
      {
        id: 204085,
        title:
          "La Famille de Darius aux pieds d'Alexandre dit La tente de Darius",
        author: "Charles Le Brun",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/232101/l?t=1qpgq7cnZVYp8EEqhTsOKg",
        popularity: 4.0943445622221,
      },
      {
        id: 198513,
        title:
          "Installation du Conseil d'Etat au palais du Petit-Luxembourg, le 25 décembre 1799",
        author: "Louis Charles Auguste Couder",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/131040/l?t=9RNf5PDRxQIREM76jzOpWw",
        popularity: 4.07753744390572,
      },
      {
        id: 68665,
        title: "Le ballon ou Coin de parc avec enfant jouant au ballon",
        author: "Félix Vallotton",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/215632/l?t=Y7pvufm2FGFICF4r9SC8gw",
        popularity: 4.07753744390572,
      },
      {
        id: 202357,
        title:
          "Réception des ambassadeurs du Siam par Napoléon III et l'impératrice Eugénie",
        author: "Jean Léon Gérôme",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/192814/l?t=oRru76KaWx-hVfY2n2eOzA",
        popularity: 4.07753744390572,
      },
      {
        id: 204921,
        title: "Vue du château de Versailles prise de la place d'armes en 1722",
        author: "Pierre Denis Martin",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/190920/l?t=yUl9gc_m2aN3d40aRzkcKQ",
        popularity: 4.07753744390572,
      },
      {
        id: 208813,
        title: "La Peste d'Asdod dit les Philistins frappés de la Peste",
        author: "Nicolas Poussin",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/715726/l?t=RGG536sbt326Umex9P-0SA",
        popularity: 4.06044301054642,
      },
      {
        id: 211252,
        title:
          "Panneau pour la baraque de la Goulue, à la Foire du Trône à Paris",
        author: "Henri de Toulouse-Lautrec",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/435104/l?t=0ZOy33OdYBNtn_ypM48MxQ",
        popularity: 4.06044301054642,
      },
      {
        id: 228226,
        title: "La Bouée rouge, Saint-Tropez",
        author: "Paul Signac",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/109059/l?t=EysVq0ZCQWtE7FIT8qEcXw",
        popularity: 4.06044301054642,
      },
      {
        id: 198974,
        title: "Le général Bonaparte",
        author: "Jacques-Louis David",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1061060/l?t=gnV-cRGGtdMKAPq0BvVMiw",
        popularity: 4.06044301054642,
      },
      {
        id: 204212,
        title: "La Bataille de Marengo, 14 juin 1800",
        author: "Louis François Lejeune",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/924580/l?t=YVn5eN-zOVeHmAtkg5QrJQ",
        popularity: 4.06044301054642,
      },
      {
        id: 74643,
        title: "Paysannes bretonnes",
        author: "Paul Gauguin",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/208813/l?t=y7VM_uq1bFtr7-0OTP3MCg",
        popularity: 4.06044301054642,
      },
      {
        id: 197751,
        title: "Baigneurs",
        author: "Paul Cézanne",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/295584/l?t=tJJ_bwEbqSS8G2K6h9ox0g",
        popularity: 4.04305126783455,
      },
      {
        id: 71909,
        title:
          "Entrée d'Alexandre le Grand dans Babylone ou Le triomphe d'Alexandre",
        author: "Charles Le Brun",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/191701/l?t=B9FPDRn60uDv9JjJNUvLSQ",
        popularity: 4.02535169073515,
      },
      {
        id: 198609,
        title: "Louis XIV reçoit dans la Galerie des Glaces de Versailles",
        author: "Antoine Coypel",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/195772/l?t=RJLSSm-ECPX_oTecFm38Pg",
        popularity: 4.02535169073515,
      },
      {
        id: 205828,
        title: "Prométhée",
        author: "Gustave Moreau",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/190208/l?t=n5198O8VrXgtjrj42byQrg",
        popularity: 4.02535169073515,
      },
      {
        id: 66007,
        title: "L'Apparition",
        author: "Gustave Moreau",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/218581/l?t=MFnXYZ6Z8hEDqCsORqgXrw",
        popularity: 4.02535169073515,
      },
      {
        id: 204218,
        title: "La Bataille d'Aboukir, le 25 juillet 1799",
        author: "Louis François Lejeune",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/191423/l?t=DlN8gXjhDxZNJJyZDhzkCA",
        popularity: 4.00733318523247,
      },
      {
        id: 211667,
        title: "Napoléon Ier passe en revue la garde",
        author: "Horace Vernet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/185780/l?t=D8AOjAvUdh6otB2SZOjPVg",
        popularity: 4.00733318523247,
      },
      {
        id: 132001,
        title: "Le sommeil",
        author: "Gustave Courbet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/43364/l?t=AVS1oyQGnw7j_B1IBShi8A",
        popularity: 4.00733318523247,
      },
      {
        id: 211701,
        title: "Napoléon Ier à la bataille de Wagram, 6 juillet 1809",
        author: "Horace Vernet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/185797/l?t=4T_gc1mwrHTMP88jF9X_Og",
        popularity: 4.00733318523247,
      },
      {
        id: 209445,
        title: "Philosophe en méditation",
        author: "Rembrandt",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/1089433/l?t=IwDL1lQ36H9ipia-b5Bq4A",
        popularity: 4.00733318523247,
      },
      {
        id: 204248,
        title: "Famille de paysans dans un intérieur",
        author: "Louis Le Nain",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/365273/l?t=U2EePB8kjNBJHP2o1DOK4Q",
        popularity: 4.00733318523247,
      },
      {
        id: 75498,
        title: "L'entrée du port de Marseille",
        author: "Joseph Vernet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/728885/l?t=Z0HqC3Kyh1xvYRJ1mpm1Sg",
        popularity: 4.00733318523247,
      },
      {
        id: 198902,
        title: "La République - esquisse",
        author: "Honoré Daumier",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/43097/l?t=VF3oomxDka6rKh5CUvIxqw",
        popularity: 4.00733318523247,
      },
      {
        id: 119226,
        title: "Autoportrait à l'âge de 24 ans",
        author: "Jean-Auguste-Dominique Ingres",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/112941/l?t=2cIBtIfpWNKz2Ia-40qfnA",
        popularity: 3.98898404656427,
      },
      {
        id: 201952,
        title: "Marie-Antoinette, reine de France",
        author: "Jean-Baptiste-André Gautier d'Agoty",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/193085/l?t=qQ2GTfYvXK7zKHTz0hL6Ig",
        popularity: 3.98898404656427,
      },
      {
        id: 65959,
        title: "Régates à Argenteuil",
        author: "Claude Monet",
        imageUrl:
          "https://api.art.rmngp.fr/v1/images/675/218207/l?t=O98MZQy385TlPC_H5W3wdA",
        popularity: 3.98898404656427,
      },
    ],
    gameHistory : [],
    playerScore: 0,
    difficulty: "easy",
    settings: {
      easy: {
        rounds: 10,
        maxIndex: 40,
        time: 30,
      },
      medium: {
        rounds: 15,
        maxIndex: 80,
        time: 30,
      },
      hard: {
        rounds: 20,
        maxIndex: 230,
        time: 30,
      },
      custom: {
        rounds: null,
        maxIndex: null,
        time: null,
      },
    },
  },
  mutations: {
    INCREMENT_SCORE: (state, value) => {
      state.playerScore += value;
    },
    SET_DIFFICULTY: (state, value) => {
      state.difficulty = value;
      state.playerScore = 0;
    },
  },
  actions: {
    incrementScore({ commit }, value) {
      commit("INCREMENT_SCORE", value);
    },
    setDifficulty({ commit }, value){
      commit("SET_DIFFICULTY", value);
    }
  },
  modules: {},
});
