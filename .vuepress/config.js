module.exports = {
  theme: "book",
  title: "Sample Cookbook",
  themeConfig: {
    sidebar: {
     "/page/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["", "Page"]],
        },
		//  "",
		 "a",
		 "b",
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/about", "About"]],
        },
	 ],
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/", "Home"]],
        },
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/about", "About"]],
        },
        {
          title: "Page",
          collapsable: false,
        //   sidebarDepth: 0,
          children: [
			  "/page/a",
			  "/page/b",
			],
        },
      ],
    },
  },
};
