let currentPopover = null;

function AddStory(storyType) {
  try {
    if (!customElements.get('modal-add-story'))
          prepareAddStoryContent(storyType);
    if (!customElements.get('popover-add-story'))
          prepareAddStoryPopOver();
          
    createModal('modal-add-story').then(function(){
      const optionsButton = document.getElementById('add-story-options');
      optionsButton.addEventListener('click', onAddStoryOptionsClick);
    });
  }
  catch (ex) {
    console.error(ex.message);
  }
}
function AddStory_Submit(event){
  try{
  }
  catch (ex) {
    console.error(ex.message);
  }
}

function prepareAddStoryContent(storyType="General") {
  customElements.define('modal-add-story', class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <ion-header translucent>
            <ion-toolbar color="primary">
              <ion-buttons slot="start">
                <ion-button onclick="dismissModal()">
                  <ion-icon slot="icon-only"  name="arrow-back-outline"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-title>Add Story</ion-title>
              <ion-buttons slot="end">
                <ion-button onclick="AddStory_Submit(event)">
                  <ion-icon slot="icon-only"  name="caret-forward-circle-outline"></ion-icon>
                </ion-button>
                <ion-button id="add-story-options">
                  <ion-icon slot="icon-only"   name="ellipsis-vertical-outline"></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content fullscreen>
          <form id="formStory" onsubmit="AddStory_Submit(event)">
            <ion-list lines="full" class="ion-no-margin ion-no-padding">
              <ion-item>
                <ion-label>Story Type</ion-label>
                <ion-select id="modal-add-story-type" value="RealLife">
                  <ion-select-option value="RealLife">Real Life</ion-select-option>
                  <ion-select-option value="Fictional">Fictional</ion-select-option>
                  <ion-select-option value="General">General</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-label>Category</ion-label>
                <ion-select id="modal-add-story-category" value="Covid19">
                  <ion-select-option value="Covid19">Covid 19</ion-select-option>
                  <ion-select-option value="Health">Health</ion-select-option>
                  <ion-select-option value="Relationship">Relationship</ion-select-option>
                  <ion-select-option value="Education">Education</ion-select-option>
                  <ion-select-option value="Business">Business</ion-select-option>
                  <ion-select-option value="Job">Job</ion-select-option>
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Title <ion-text color="danger">*</ion-text></ion-label>
                <ion-input name="storyTitle" id="storyTitle" required type="text" maxlength="100"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Notes <ion-text color="danger">*</ion-text></ion-label>
                <ion-textarea name="storyDescription" id="storyDescription"></ion-textarea>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Labels <ion-text color="danger">*</ion-text></ion-label>
                <ion-input name="storyLabels" id="storyLabels" placeholder="Ex: Motivational, Thoughtful" required type="text" oninput="handleFirstNameValue(event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-checkbox color="primary" checked disabled slot="start"></ion-checkbox>
                <ion-textarea readonly name="agreement" id="storyDescription">I am the owner of this content and it doesn't include any abusive, anti-social or other illegal content .I am solely resposible for any legal proceedings if this content is REPORTED by others</ion-textarea>
                <p>
                  <ion-chip outline color="danger">
                    <ion-label>Important</ion-label>
                  </ion-chip>
                </p>
              </ion-item>
            <ion-list>
          </form>
          <script type="text/javascript">
            $(document).ready(function(){
              $('#modal-add-story-type').value="`+storyType+`";
              alert($('#modal-add-story-type').value);
            });
          </script>
          </ion-content>
        `;
    }
  });
}

function prepareAddStoryPopOver(){
  try{
    customElements.define('popover-add-story', class ModalContent extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <ion-list>
            <ion-item button>Save as draft</ion-item>
            <ion-item button>Discard</ion-item>
          </ion-list>
        `;
      }
    });
  }
  catch (ex) {
    console.error(ex.message);
  }
}

async function onAddStoryOptionsClick(ev) {
  popover = await popoverController.create({
    component: 'popover-add-story',
    event: ev,
    translucent: true
  });
  currentPopover = popover;
  return popover.present();
}

function dismissPopover() {
  if (currentPopover) {
    currentPopover.dismiss().then(() => { currentPopover = null; });
  }
}