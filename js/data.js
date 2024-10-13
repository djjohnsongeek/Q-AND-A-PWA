var QData = {
    maxIndex: () => {
        return this.questions.length - 1;
    },
    minIndex: 0,
    languages: ["English", "French"],
    questions: [
        {
            index: 0,
            english: {
                question: "What is the color of yellow ?",
                answer: "Yellow is a bright, warm color that lies between green and orange in the visible spectrum. It is often associated with sunlight, happiness, and energy.",
            },
            french: {
                question: "Quelle est la couleur du jaune ?",
                answer: "Le jaune est une couleur vive et chaude qui se situe entre le vert et l'orange dans le spectre visible. Il est souvent associé à la lumière du soleil, à la joie et à l'énergie.",
            }
        },
        {
            index: 1,
            english: {
                question: "How is it that Ducks can fly ?",
                answer: "Ducks can fly due to their strong wing muscles and specialized feathers, which allow them to generate enough lift. Their bodies are also lightweight, and their wings are adapted for efficient flight over long distances.",
            },
            french: {
                question: "Comment se fait-il que les canards puissent voler ?",
                answer: "Les canards peuvent voler grâce à leurs muscles ailés puissants et leurs plumes spécialisées, qui leur permettent de générer suffisamment de portance. Leur corps est aussi léger, et leurs ailes sont adaptées pour un vol efficace sur de longues distances.",
            }
        },
        {
            index: 2,
            english: {
                question: "How long can a pig live ?",
                answer: "Pigs can live up to 15-20 years in ideal conditions. However, most farmed pigs are typically slaughtered around 6 months to 2 years of age.",
            },
            french: {
                question: "Combien de temps un cochon peut-il vivre ?",
                answer: "Les cochons peuvent vivre jusqu'à 15-20 ans dans des conditions idéales. Cependant, la plupart des cochons d'élevage sont généralement abattus autour de 6 mois à 2 ans.",
            }
        },
        {
            index: 3,
            english: {
                question: "What is the oldest tree ?",
                answer: "The oldest known tree is a bristlecone pine named Methuselah, located in California, which is over 4,800 years old. Another contender is a clonal colony of quaking aspen known as Pando, estimated to be around 80,000 years old",
            },
            french: {
                question: "Quel est l'arbre le plus ancien ?",
                answer: "L'arbre le plus ancien connu est un pin de Bristlecone nommé Methuselah, situé en Californie, qui a plus de 4 800 ans. Un autre concurrent est une colonie clonale de trembles connue sous le nom de Pando, estimée à environ 80 000 ans",
            }
        },
        {
            index: 4,
            english: {
                question: "Do insects have hearts ?",
                answer: "Insects do not have hearts like mammals; instead, they possess a simple dorsal vessel that pumps hemolymph (a fluid equivalent to blood) through their bodies. This system works effectively for their smaller size and different physiological needs.",
            },
            french: {
                question: "Les insectes ont-ils des cœurs ?",
                answer: "Les insectes n'ont pas de cœur comme les mammifères ; ils possèdent plutôt un vaisseau dorsal simple qui pompe l'hémolymphe (un fluide équivalent au sang) dans leur corps. Ce système fonctionne efficacement pour leur petite taille et leurs besoins physiologiques différents.",
            }
        },
        {
            index: 5,
            english: {
                question: "How deep in the universe ?",
                answer: "The depth of the universe is difficult to quantify, as it is continually expanding and possibly infinite. Current estimates suggest that the observable universe is about 93 billion light-years in diameter.",
            },
            french: {
                question: "Quelle est la profondeur de l'univers ?",
                answer: "La profondeur de l'univers est difficile à quantifier, car il est en expansion continue et peut être infini. Les estimations actuelles suggèrent que l'univers observable mesure environ 93 milliards d'années-lumière de diamètre.",
            }
        },
        {
            index: 6,
            english: {
                question: "How does one paint a picture ?",
                answer: "To paint a picture, one begins by preparing a surface, selecting paints, and using brushes or other tools to apply color, texture, and detail. The artist then guides the composition through thoughtful choices of subject, technique, and layers to bring the image to life."
            },
            french: {
                question: "Comment peint-on une image ?",
                answer: "Pour peindre une image, on commence par préparer une surface, choisir les peintures, et utiliser des pinceaux ou d'autres outils pour appliquer de la couleur, de la texture et des détails. L'artiste guide ensuite la composition par des choix réfléchis de sujet, de technique et de couches pour donner vie à l'image.",
            }
        }
    ]
}