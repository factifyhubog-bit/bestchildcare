function shareSite() {
  if (navigator.share) {
    navigator.share({
      title: 'BestChildCare',
      text: 'Help save a child’s life by supporting medical treatment.',
      url: window.location.href
    });
  } else {
    alert("Please copy and share this link:\n" + window.location.href);
  }
}
