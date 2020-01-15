let people = [
  {
    id: 1,
    name: 'Michelle Mabuyo',
    role: 'mentor',
    stream: 'development',
    description:
      'Workshop lead for Web Development 101. Feels like a wizard with code. Will happily help with your front-end development woes, maybe in exchange for cute cat pictures.',
    image_link: 'img/michelle.png',
    is_favourite: true
  },
  {
    id: 2,
    name: 'Reagan Metcalfe',
    role: 'hacker',
    stream: 'design',
    description:
      'Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans',
    image_link: 'img/design.png',
    is_favourite: false
  },
  {
    id: 3,
    name: 'Terrence Lewis',
    role: 'hacker',
    stream: 'business',
    description:
      'parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright',
    image_link: 'img/business.png',
    is_favourite: false
  }
];

const replaceHTMLCardTemplate = () => {
  let source = document.getElementById('card-template').innerHTML;
  let template = Handlebars.compile(source);
  let context = { people: people };
  let html = template(context);
  document.getElementById('target').innerHTML = html;
};

replaceHTMLCardTemplate();
