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

function initializeFaveBtnClickListeners() {
  let faveBtns = document.getElementsByClassName('fave-btn');
  Array.from(faveBtns).forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(btn.dataset.pid);
      toggleIsFavourite(id);
      replaceHTMLCardTemplate();
    });
  });
}

function replaceHTMLCardTemplate() {
  let source = document.getElementById('card-template').innerHTML;
  let template = Handlebars.compile(source);
  let context = { people: people };
  let html = template(context);
  document.getElementById('target').innerHTML = html;

  initializeFaveBtnClickListeners();
}

replaceHTMLCardTemplate();

function toggleIsFavourite(id) {
  // find the person we want to update in our array by using the id
  let person = people.find(function(person) {
    return person.id === id;
  });

  // update that person's is_favourite property (toggle it)
  person.is_favourite = !person.is_favourite;
}
