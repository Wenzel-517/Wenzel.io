var posts=["2022/11/25/心路历程/","2024/06/21/标签语法/","2024/07/10/艾宾浩斯遗忘曲线/","2024/09/19/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };