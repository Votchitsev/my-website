class Header {
  constructor(element) {
    this.element = element;
    this.toggle = element.querySelector('.header-menu-toggle');
    this.menuContainer = element.querySelector('.header-menu-container');
    this.state = {
      dropdownMenu: false,
    };

    this.holdElement = this.holdElement.bind(this);
    this.letElement = this.letElement.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.eventRoute = this.eventRoute.bind(this);
    this.items = {
      home: this.menuContainer.querySelector('.header-menu-item--home'),
      about: this.menuContainer.querySelector('.header-menu-item--about'),
      education: this.menuContainer.querySelector('.header-menu-item--education'),
      projects: this.menuContainer.querySelector('.header-menu-item--pet-projects'),
      contact: this.menuContainer.querySelector('.header-menu-item--contact'),
    };

    document.addEventListener('click', this.eventRoute);
  }

  eventRoute(e) {
    if (e.target.classList.contains('header-menu-toggle')) {
      this.showDropdownMenu();
    }
  }

  holdElement() {
    this.element.classList.add('header-fixed');
    this.toggle.classList.add('toggle-black');
  }

  letElement() {
    this.element.classList.remove('header-fixed');
    this.toggle.classList.remove('toggle-black');
  }

  showDropdownMenu() {
    this.menuContainer.classList.toggle('header-menu-container--hidden');

    if (this.state.dropdownMenu) {
      this.state.dropdownMenu = false;
      return;
    }

    this.state.dropdownMenu = true;
  }
}

export default Header;
