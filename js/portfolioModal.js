const portfolio = {
  listItems: document.querySelectorAll(".portfolio__list-item"),
  listImages: document.querySelectorAll(".portfolio__img"),
  srcImages: "portfolio",
  modal: document.querySelector(".modal__portfolio"),
  modalClose: document.querySelector(".modal__portfolio__close"),
  modalImage: document.querySelector(".modal__portfolio__img")
}

const about = {
  listItems: document.querySelectorAll(".about__list-item"),
  modal: document.querySelector(".modal__about"),
  modalClose: document.querySelector(".modal__about__close"),
}

// открыть увеличенный элемент modal about
const modalAboutLists = document.querySelectorAll(".modal__about__list")

modalAboutLists.forEach(modalAboutListItem => {
  const modalAboutListItemsLi = modalAboutListItem.querySelectorAll(".modal__about__list__item")

  modalAboutListItemsLi.forEach(modalAboutListItemLi => {
    modalAboutListItemLi.addEventListener("click", () => {
      modalAboutListItemLi.getAttribute("active") ? closeBigItem() : showBigItem()
    })

    about.modalClose.addEventListener("click", () => closeBigItem())

    function closeBigItem() {
      modalAboutListItemLi.removeAttribute("active")
      modalAboutListItemLi.style.width = ""
      modalAboutListItem.style.justifyContent = ""

      modalAboutListItemsLi.forEach(listItem => listItem.style.display = "block")
    }

    function showBigItem() {
      modalAboutListItemsLi.forEach(listItem => listItem.style.display = "none")

      modalAboutListItemLi.style.display = "block"
      window.innerWidth < 830 ? modalAboutListItemLi.style.width = "100%" : modalAboutListItemLi.style.width = "50%"        
      modalAboutListItemLi.setAttribute("active", "true")
      modalAboutListItem.style.justifyContent = "center"
    }
  })

})

// modalAbout
modalAbout(about)

function modalAbout(data) {
  const {listItems, modal, modalClose} = data

  listItems.forEach((listItem, index) => {
    listItem.addEventListener("click", () => {
      modal.classList.add("modal-show")
      document.querySelectorAll(".modal__about__list")[index].style.display = "flex"
      document.documentElement.style.overflow = "hidden"

      modalClose.addEventListener("click", () => {
        modal.classList.remove("modal-show")
        document.querySelectorAll(".modal__about__list")[index].style.display = "none"
        document.documentElement.style.overflow = ""
      })
      
      document.addEventListener("keydown", (event) => {
        if(event.key === "Escape") {
          modal.classList.remove("modal-show")
          document.querySelectorAll(".modal__about__list")[index].style.display = "none"
          document.documentElement.style.overflow = ""
        }
      })
    })
  })
}

// modalPortfolio
modalPortfolio(portfolio)

function modalPortfolio(data) {
  const {listItems, listImages, srcImages, modal, modalClose, modalImage} = data

  listItems.forEach((listItem, index) => {
    listItem.addEventListener("click", () => {
      modal.classList.add("modal-show")
      modalImage.setAttribute("src", `img/${srcImages + "-" + listImages[index].getAttribute("data-number-img")}.avif`)
      document.documentElement.style.overflow = "hidden"
    })
  })
  
  modalClose.addEventListener("click", () => {
    modal.classList.remove("modal-show")
    document.documentElement.style.overflow = ""
  })
  
  document.addEventListener("keydown", (event) => {
    if(event.key === "Escape") {
      modal.classList.remove("modal-show")
      document.documentElement.style.overflow = ""
    }
  })
}