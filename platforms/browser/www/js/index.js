
var app = {
    initialize: function () {
        this.bindEvents();
    },
    stories: [
        {
            postID: 123,
            title: "Dynamic contentLive Story 1",
            description: "Dynamic content Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
            dateTime: "2020/07/15 07:35 PM",
            views: 1020,
            likes: 431,
            comments: 5643,
            shares: 762
        }
    ],
    globalLoader:null,
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // Need to write code for load event to show some Icon while starting the application 
    },
    homeTab:function(){
        $('[tab="live-stories"]').click();
    },
    onDeviceReady: function () {
        $('#bb-page-title').text("Live Stories");
        $('ion-tab-button').on('click', function(event){
            debugger;
            $('#bb-page-title').text($(this).find('ion-label').text());
        });
        $('[data-type="StoryCategoryFilter"]').on('ionChange', function(event){
            alert($(this).val()+' in '+$(this).closest('ion-tab').attr('tab'));
        });
        
    },
    appendItems: function (number) {
        // console.log('length is', length);
        const list = document.getElementById('list-live-stories');
        // const originalLength = length;
        for (var i = 0; i < number; i++) {
            const el = document.createElement('ion-item');
            el.innerHTML = `
            <div div-type="card">
                    <ion-card>
                      <ion-card-header>
                        <ion-card-title>
                          <u onclick="createModal()">${app.stories[0].title}</u>
                          <ion-chip style="background-color: white;" onclick="showToast('Views: ${app.stories[0].views}')">
                            <ion-icon name="eye-outline"></ion-icon>
                            <IonBadge>${app.stories[0].views}</IonBadge>
                          </ion-chip>
                          <ion-chip style="background-color: white;" onclick="savePost(this)">
                            <ion-icon name="bookmark-outline"></ion-icon>
                            <ion-label data-type="label">Save</ion-label>
                          </ion-chip>
                        </ion-card-title>
                        <ion-card-subtitle>
                          <ion-icon name="alarm-outline"></ion-icon>${app.stories[0].dateTime}
                        </ion-card-subtitle>
                      </ion-card-header>
                      <ion-card-content>
                        <p onclick="createModal()">
                        ${app.stories[0].description}
                        </p>
                        <hr>
                        <p>
                          <ion-chip style="background-color: white;" onclick="likePost(this)">
                            <ion-icon name="heart-outline"></ion-icon>
                            <IonBadge>${app.stories[0].likes}</IonBadge>
                          </ion-chip>
                          <ion-chip style="background-color: white;">
                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                            <IonBadge>${app.stories[0].comments}</IonBadge>
                          </ion-chip>
                          <ion-chip style="background-color: white;">
                            <ion-icon name="share-social-outline"></ion-icon>
                            <IonBadge>${app.stories[0].shares}</IonBadge>
                          </ion-chip>
                        </p>
                      </ion-card-content>
                    </ion-card>
                  </div>
          `;
            list.appendChild(el);
            // length++;
        }
        // app.globalLoader.dismiss();
    },
    setPageName:function(pageName){
        pageName = pageName & pageName != "" ? pageName: "Live Stories";
        $('#bb-page-title').text("Live Stories");
    }

};
