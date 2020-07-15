const refresher = document.getElementById('refresher-live-stories');
refresher.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      alert("refresher-live-stories");
      refresher.complete();
    }, 2000);
  });

const refresher1 = document.getElementById('refresher-my-stories');
refresher1.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      alert("refresher-my-stories");
      refresher1.complete();
    }, 2000);
  });
  
  const refresher2 = document.getElementById('refresher-account');
  refresher2.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      alert("refresher-account");
      refresher2.complete();
    }, 2000);
  });
  