export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/columbia-journalism.jpeg","images/columbia-logo.jpeg","images/grassroutes-logo.jpeg","images/headshot.jpg","images/incite-logo.jpeg","images/peloton-logo.jpeg","images/ssrc-logo.jpeg","images/thetake-logo.jpeg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ee6f3e8c.js","imports":["_app/immutable/entry/start.ee6f3e8c.js","_app/immutable/chunks/index.898f3223.js","_app/immutable/chunks/singletons.b3dfafb8.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.832819ee.js","imports":["_app/immutable/entry/app.832819ee.js","_app/immutable/chunks/index.898f3223.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
