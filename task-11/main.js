const changeFavicon = (url) => {
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = url;
  } else {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = url;

    document.head.append(link);
  }
};

changeFavicon("./favicon.ico");
