var dynamicText = "Dynamic text";

customElements.define('modal-content', class ModalContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>Live Story 1</ion-title>
            <ion-buttons slot="end">
                <ion-tab-button>
                <ion-icon name="close-outline"  onclick="dismissModal()" ></ion-icon>
                </ion-tab-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <p>`+ dynamicText + `
                Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital
                of
                the Wisconsin Territory in 1836.
                And Complete Content will be Displayed here 
            </p>
            <hr>
                    <p> `+ dynamicText + `
                        <ion-chip color="primary">
                        <ion-icon name="eye-outline" color="primary"></ion-icon>
                        <IonBadge>543</IonBadge>
                        </ion-chip>
                      <ion-chip color="danger">
                        <ion-icon name="heart-outline" color="danger"></ion-icon>
                        <IonBadge>432</IonBadge>
                      </ion-chip>
                      <ion-chip color="secondary">
                        <ion-icon name="chatbubble-ellipses-outline" color="secondary"></ion-icon>
                        <IonBadge>143</IonBadge>
                      </ion-chip>
                      <ion-chip color="tertiary">
                        <ion-icon name="share-social-outline" color="tertiary"></ion-icon>
                        <IonBadge>243</IonBadge>
                      </ion-chip>
                    </p>
        </ion-content>
      `;
  }
});

function prepareContent(header) {
  customElements.define('dynamic-modal-content', class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <ion-header translucent>
            <ion-toolbar>
              <ion-title>`+ header + `</ion-title>
              <ion-buttons slot="end">
                  <ion-tab-button>
                  <ion-icon name="close-outline"  onclick="dismissModal()" ></ion-icon>
                  </ion-tab-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content fullscreen>
              <p>`+ dynamicText + `
                  Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital
                  of
                  the Wisconsin Territory in 1836.
                  And Complete Content will be Displayed here 
              </p>
              <hr>
                      <p> `+ dynamicText + `
                          <ion-chip color="primary">
                          <ion-icon name="eye-outline" color="primary"></ion-icon>
                          <IonBadge>543</IonBadge>
                          </ion-chip>
                        <ion-chip color="danger">
                          <ion-icon name="heart-outline" color="danger"></ion-icon>
                          <IonBadge>432</IonBadge>
                        </ion-chip>
                        <ion-chip color="secondary">
                          <ion-icon name="chatbubble-ellipses-outline" color="secondary"></ion-icon>
                          <IonBadge>143</IonBadge>
                        </ion-chip>
                        <ion-chip color="tertiary">
                          <ion-icon name="share-social-outline" color="tertiary"></ion-icon>
                          <IonBadge>243</IonBadge>
                        </ion-chip>
                      </p>
          </ion-content>
        `;
    }
  });
}