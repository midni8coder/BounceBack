
function prepareEditStoryPopOver(){
  try{
    customElements.define('popover-edit-story', class ModalContent extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <ion-list>
            <ion-item button>Move to Draft</ion-item>
            <ion-item button>Delete</ion-item>
          </ion-list>
        `;
      }
    });
  }
  catch (ex) {
    console.error(ex.message);
  }
}