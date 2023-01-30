(() => {
    const refsBtn = {
      goToOnlineModal: document.querySelector("[data-btn-offline]"),
      goToOfflineModal: document.querySelector("[data-btn-online]"),
    };
  
    refs.goToOnlineModal.addEventListener('click', btnModalOnline)
    refs.goToOfflineModal.addEventListener('click', btnModalOffline)
  
    function btnModalOffline() {
      refs.modal.classList.toggle('is-hidden-btn-offline');
    }
    function btnModalOnline() {
      refs.modal.classList.toggle('is-hidden-btn-online')
    }
  })();