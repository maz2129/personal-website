import{S as te,i as ae,s as ie,k as g,q as y,a as N,l as p,m as b,r as I,h as f,c as T,n as u,b as H,G as s,H as Q,J as le,u as se,g as C,v as Z,d as A,f as K,K as _e,L as be,M as re,y as O,z as Y,A as B,B as J,N as we,O as ke,P as ye,Q as ne}from"../chunks/index.898f3223.js";function Ie(v){let e,t,a,l,i,r,n,c;return{c(){e=g("h2"),t=y("Matt Zinman"),a=N(),l=g("p"),i=y("Hi 👋. I'm interested in distributed systems, data journalism, and civic technology. Currently I work as a software engineer at Peloton where I build, design, and maintain the backend of the in-class leaderboard. You can reach me on "),r=g("a"),n=y("LinkedIn"),c=y(" or by email at mattalexzin@gmail.com."),this.h()},l(d){e=p(d,"H2",{});var m=b(e);t=I(m,"Matt Zinman"),m.forEach(f),a=T(d),l=p(d,"P",{class:!0});var o=b(l);i=I(o,"Hi 👋. I'm interested in distributed systems, data journalism, and civic technology. Currently I work as a software engineer at Peloton where I build, design, and maintain the backend of the in-class leaderboard. You can reach me on "),r=p(o,"A",{target:!0,href:!0});var h=b(r);n=I(h,"LinkedIn"),h.forEach(f),c=I(o," or by email at mattalexzin@gmail.com."),o.forEach(f),this.h()},h(){u(r,"target","_blank"),u(r,"href","https://www.linkedin.com/in/matt-zinman-480315153/"),u(l,"class","svelte-1hjseqx")},m(d,m){H(d,e,m),s(e,t),H(d,a,m),H(d,l,m),s(l,i),s(l,r),s(r,n),s(l,c)},p:Q,i:Q,o:Q,d(d){d&&f(e),d&&f(a),d&&f(l)}}}class $e extends te{constructor(e){super(),ae(this,e,null,Ie,ie,{})}}function Ee(v){let e,t,a,l,i,r,n,c,d,m,o,h,w,_,k,U,$,S;return{c(){e=g("div"),t=g("div"),a=g("div"),l=g("p"),i=g("strong"),r=y(v[0]),n=N(),c=g("p"),d=y(v[2]),m=N(),o=g("p"),h=g("em"),w=y(v[3]),_=N(),k=g("div"),U=g("div"),$=g("img"),this.h()},l(V){e=p(V,"DIV",{id:!0,class:!0});var z=b(e);t=p(z,"DIV",{id:!0,class:!0});var P=b(t);a=p(P,"DIV",{id:!0});var E=b(a);l=p(E,"P",{class:!0});var F=b(l);i=p(F,"STRONG",{});var j=b(i);r=I(j,v[0]),j.forEach(f),F.forEach(f),n=T(E),c=p(E,"P",{class:!0});var L=b(c);d=I(L,v[2]),L.forEach(f),m=T(E),o=p(E,"P",{id:!0,class:!0});var M=b(o);h=p(M,"EM",{});var R=b(h);w=I(R,v[3]),R.forEach(f),M.forEach(f),E.forEach(f),P.forEach(f),_=T(z),k=p(z,"DIV",{id:!0,class:!0});var q=b(k);U=p(q,"DIV",{id:!0,class:!0});var G=b(U);$=p(G,"IMG",{src:!0,class:!0}),G.forEach(f),q.forEach(f),z.forEach(f),this.h()},h(){u(l,"class","svelte-1mg7az6"),u(c,"class","svelte-1mg7az6"),u(o,"id","timeframe"),u(o,"class","svelte-1mg7az6"),u(a,"id","companyNameContainer"),u(t,"id","companyNameColumn"),u(t,"class","svelte-1mg7az6"),le($.src,S=v[1])||u($,"src",S),u($,"class","svelte-1mg7az6"),u(U,"id","imageContainer"),u(U,"class","svelte-1mg7az6"),u(k,"id","companyLogoColumn"),u(k,"class","svelte-1mg7az6"),u(e,"id","experienceContainer"),u(e,"class","svelte-1mg7az6")},m(V,z){H(V,e,z),s(e,t),s(t,a),s(a,l),s(l,i),s(i,r),s(a,n),s(a,c),s(c,d),s(a,m),s(a,o),s(o,h),s(h,w),s(e,_),s(e,k),s(k,U),s(U,$)},p(V,[z]){z&1&&se(r,V[0]),z&4&&se(d,V[2]),z&8&&se(w,V[3]),z&2&&!le($.src,S=V[1])&&u($,"src",S)},i:Q,o:Q,d(V){V&&f(e)}}}function Ce(v,e,t){let{companyName:a=""}=e,{imgUrl:l=""}=e,{positionName:i=""}=e,{timeFrame:r=""}=e;return v.$$set=n=>{"companyName"in n&&t(0,a=n.companyName),"imgUrl"in n&&t(1,l=n.imgUrl),"positionName"in n&&t(2,i=n.positionName),"timeFrame"in n&&t(3,r=n.timeFrame)},[a,l,i,r]}class X extends te{constructor(e){super(),ae(this,e,Ce,Ee,ie,{companyName:0,imgUrl:1,positionName:2,timeFrame:3})}}function oe(v,e,t){const a=v.slice();return a[4]=e[t],a}function ce(v){let e,t,a,l=v[4].toggleName+"",i,r,n,c,d,m;return c=be(v[3][0]),{c(){e=g("label"),t=g("input"),a=N(),i=y(l),r=N(),this.h()},l(o){e=p(o,"LABEL",{class:!0});var h=b(e);t=p(h,"INPUT",{type:!0,class:!0}),a=T(h),i=I(h,l),r=T(h),h.forEach(f),this.h()},h(){u(t,"type","checkbox"),t.__value=v[4].toggleCode,t.value=t.__value,u(t,"class","svelte-1wxrt9b"),u(e,"class",n=v[4].toggleCode+" "+(v[0].includes(v[4].toggleCode)?"selected":"")+" svelte-1wxrt9b"),c.p(t)},m(o,h){H(o,e,h),s(e,t),t.checked=~(v[0]||[]).indexOf(t.__value),s(e,a),s(e,i),s(e,r),d||(m=re(t,"change",v[2]),d=!0)},p(o,h){h&1&&(t.checked=~(o[0]||[]).indexOf(t.__value)),h&1&&n!==(n=o[4].toggleCode+" "+(o[0].includes(o[4].toggleCode)?"selected":"")+" svelte-1wxrt9b")&&u(e,"class",n)},d(o){o&&f(e),c.r(),d=!1,m()}}}function de(v){let e,t,a,l,i,r,n,c,d,m,o,h,w,_,k,U,$,S,V,z;return t=new X({props:{companyName:"Peloton",imgUrl:"images/peloton-logo.jpeg",positionName:"Software Engineer",timeFrame:"Aug 2022 - present"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),l=g("div"),i=g("ul"),r=g("p"),n=y("On Peloton's leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton's Apple Watch integration. I work with kubernetes, kafka, redis, dynamodb, postgres, argo, datadog, python, kotlin, etc. Some highlights have been:"),c=N(),d=g("li"),m=y("Building and rolling out the micro-service that ingests all of Peloton's leaderboard data."),o=N(),h=g("li"),w=y("Testing, scaling, and maintaining the leaderboard for Peloton's "),_=g("a"),k=y("Ride to Greatness"),U=y(", an annual class where cyclers compete in teams."),$=N(),S=g("li"),V=y("Making it to semi-finals of the software org's ping pong tournament."),this.h()},l(P){e=p(P,"DIV",{class:!0});var E=b(e);Y(t.$$.fragment,E),a=T(E),l=p(E,"DIV",{class:!0});var F=b(l);i=p(F,"UL",{class:!0});var j=b(i);r=p(j,"P",{class:!0});var L=b(r);n=I(L,"On Peloton's leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton's Apple Watch integration. I work with kubernetes, kafka, redis, dynamodb, postgres, argo, datadog, python, kotlin, etc. Some highlights have been:"),L.forEach(f),c=T(j),d=p(j,"LI",{});var M=b(d);m=I(M,"Building and rolling out the micro-service that ingests all of Peloton's leaderboard data."),M.forEach(f),o=T(j),h=p(j,"LI",{});var R=b(h);w=I(R,"Testing, scaling, and maintaining the leaderboard for Peloton's "),_=p(R,"A",{href:!0,target:!0});var q=b(_);k=I(q,"Ride to Greatness"),q.forEach(f),U=I(R,", an annual class where cyclers compete in teams."),R.forEach(f),$=T(j),S=p(j,"LI",{});var G=b(S);V=I(G,"Making it to semi-finals of the software org's ping pong tournament."),G.forEach(f),j.forEach(f),F.forEach(f),E.forEach(f),this.h()},h(){u(r,"class","svelte-1wxrt9b"),u(_,"href","https://www.onepeloton.com/blog/ridetogreatness/"),u(_,"target","_blank"),u(i,"class","svelte-1wxrt9b"),u(l,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","engineering experienceDiv svelte-1wxrt9b")},m(P,E){H(P,e,E),B(t,e,null),s(e,a),s(e,l),s(l,i),s(i,r),s(r,n),s(i,c),s(i,d),s(d,m),s(i,o),s(i,h),s(h,w),s(h,_),s(_,k),s(h,U),s(i,$),s(i,S),s(S,V),z=!0},i(P){z||(C(t.$$.fragment,P),z=!0)},o(P){A(t.$$.fragment,P),z=!1},d(P){P&&f(e),J(t)}}}function ue(v){let e,t,a,l,i,r,n,c,d,m,o,h,w;return t=new X({props:{companyName:"Columbia Journalism School",imgUrl:"images/columbia-journalism.jpeg",positionName:"Research Scholar",timeFrame:"Jul 2022 - Aug 2022"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),l=g("div"),i=g("p"),r=y("I conducted a "),n=g("a"),c=y("data-driven investigation"),d=y(" into pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians."),m=N(),o=g("p"),h=y("I also worked on a project to study how political misinformation spreads on Twitter. I analyzed patterns in a giant Twitter dataset that I collected from the Twitter API. I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks."),this.h()},l(_){e=p(_,"DIV",{class:!0});var k=b(e);Y(t.$$.fragment,k),a=T(k),l=p(k,"DIV",{class:!0});var U=b(l);i=p(U,"P",{class:!0});var $=b(i);r=I($,"I conducted a "),n=p($,"A",{href:!0,target:!0});var S=b(n);c=I(S,"data-driven investigation"),S.forEach(f),d=I($," into pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians."),$.forEach(f),m=T(U),o=p(U,"P",{class:!0});var V=b(o);h=I(V,"I also worked on a project to study how political misinformation spreads on Twitter. I analyzed patterns in a giant Twitter dataset that I collected from the Twitter API. I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks."),V.forEach(f),U.forEach(f),k.forEach(f),this.h()},h(){u(n,"href","https://drive.google.com/file/d/1WRKum_9bb_sQHFYhV-8BvLE1P7VjFa_A/view?usp=share_link"),u(n,"target","_blank"),u(i,"class","svelte-1wxrt9b"),u(o,"class","svelte-1wxrt9b"),u(l,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","journ experienceDiv svelte-1wxrt9b")},m(_,k){H(_,e,k),B(t,e,null),s(e,a),s(e,l),s(l,i),s(i,r),s(i,n),s(n,c),s(i,d),s(l,m),s(l,o),s(o,h),w=!0},i(_){w||(C(t.$$.fragment,_),w=!0)},o(_){A(t.$$.fragment,_),w=!1},d(_){_&&f(e),J(t)}}}function fe(v){let e,t,a,l,i,r,n,c,d;return t=new X({props:{companyName:"GrassRoutes Canvassing",imgUrl:"images/grassroutes-logo.jpeg",positionName:"Co-Founder and Chief Product Officer",timeFrame:"Sept 2019 - Nov 2021"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),l=g("div"),i=g("p"),r=g("a"),n=y("GrassRoutes"),c=y(" provided local politicians with software tools to run data-driven campaigns at low cost. As the Chief Product Officer I worked with local campaigns to design intuitive and useful product features, and I implemented the frontend of the app using React. GrassRoutes was used by 5+ campaigns in 3+ states during the Novemeber 2020 election. The app was acquired in the fall of 2021."),this.h()},l(m){e=p(m,"DIV",{class:!0});var o=b(e);Y(t.$$.fragment,o),a=T(o),l=p(o,"DIV",{class:!0});var h=b(l);i=p(h,"P",{class:!0});var w=b(i);r=p(w,"A",{href:!0,target:!0});var _=b(r);n=I(_,"GrassRoutes"),_.forEach(f),c=I(w," provided local politicians with software tools to run data-driven campaigns at low cost. As the Chief Product Officer I worked with local campaigns to design intuitive and useful product features, and I implemented the frontend of the app using React. GrassRoutes was used by 5+ campaigns in 3+ states during the Novemeber 2020 election. The app was acquired in the fall of 2021."),w.forEach(f),h.forEach(f),o.forEach(f),this.h()},h(){u(r,"href","https://docs.google.com/document/d/1fnqta0BnJDkPnsSZvVqRuiFReDBcAwhaep8Y7uckXFU/edit?usp=sharing"),u(r,"target","_blank"),u(i,"class","svelte-1wxrt9b"),u(l,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","civic experienceDiv svelte-1wxrt9b")},m(m,o){H(m,e,o),B(t,e,null),s(e,a),s(e,l),s(l,i),s(i,r),s(r,n),s(i,c),d=!0},i(m){d||(C(t.$$.fragment,m),d=!0)},o(m){A(t.$$.fragment,m),d=!1},d(m){m&&f(e),J(t)}}}function he(v){let e,t,a,l,i,r,n,c,d,m,o,h,w;return t=new X({props:{companyName:"Social Science Research Council",imgUrl:"images/ssrc-logo.jpeg",timeFrame:"Jan 2021 - May 2021"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),l=g("div"),i=g("p"),r=y("I worked as a research assistant for several projects that combined qualitative and quantitative approaches to understand policy's impact on human well-being. You can read my work in "),n=g("a"),c=y("A Portrait of California 2021–2022"),d=y(" and "),m=g("a"),o=y("A Decade Undone: 2021 Update"),h=y("."),this.h()},l(_){e=p(_,"DIV",{class:!0});var k=b(e);Y(t.$$.fragment,k),a=T(k),l=p(k,"DIV",{class:!0});var U=b(l);i=p(U,"P",{class:!0});var $=b(i);r=I($,"I worked as a research assistant for several projects that combined qualitative and quantitative approaches to understand policy's impact on human well-being. You can read my work in "),n=p($,"A",{href:!0,target:!0});var S=b(n);c=I(S,"A Portrait of California 2021–2022"),S.forEach(f),d=I($," and "),m=p($,"A",{href:!0,target:!0});var V=b(m);o=I(V,"A Decade Undone: 2021 Update"),V.forEach(f),h=I($,"."),$.forEach(f),U.forEach(f),k.forEach(f),this.h()},h(){u(n,"href","https://measureofamerica.org/california2021-22/"),u(n,"target","_blank"),u(m,"href","http://measureofamerica.org/youth-disconnection-2021/"),u(m,"target","_blank"),u(i,"class","svelte-1wxrt9b"),u(l,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","journ experienceDiv svelte-1wxrt9b")},m(_,k){H(_,e,k),B(t,e,null),s(e,a),s(e,l),s(l,i),s(i,r),s(i,n),s(n,c),s(i,d),s(i,m),s(m,o),s(i,h),w=!0},i(_){w||(C(t.$$.fragment,_),w=!0)},o(_){A(t.$$.fragment,_),w=!1},d(_){_&&f(e),J(t)}}}function me(v){let e,t,a,l,i,r,n,c,d,m;return t=new X({props:{companyName:"Incite Lab at Columbia University",imgUrl:"images/incite-logo.jpeg",timeFrame:"Jan 2022 - May 2022"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),l=g("div"),i=g("p"),r=y("I built an "),n=g("a"),c=y("interactive webite"),d=y(" to visualize the methodology and results of an academic article about geographic disparities in access to mental healthcare."),this.h()},l(o){e=p(o,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=T(h),l=p(h,"DIV",{class:!0});var w=b(l);i=p(w,"P",{class:!0});var _=b(i);r=I(_,"I built an "),n=p(_,"A",{href:!0,target:!0});var k=b(n);c=I(k,"interactive webite"),k.forEach(f),d=I(_," to visualize the methodology and results of an academic article about geographic disparities in access to mental healthcare."),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){u(n,"href","https://www.danieltadmon.com/public-sociology/therapymaps/"),u(n,"target","_blank"),u(i,"class","svelte-1wxrt9b"),u(l,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","journ experienceDiv svelte-1wxrt9b")},m(o,h){H(o,e,h),B(t,e,null),s(e,a),s(e,l),s(l,i),s(i,r),s(i,n),s(n,c),s(i,d),m=!0},i(o){m||(C(t.$$.fragment,o),m=!0)},o(o){A(t.$$.fragment,o),m=!1},d(o){o&&f(e),J(t)}}}function ge(v){let e,t,a,l,i,r,n,c,d,m;return t=new X({props:{companyName:"COMS 4111 Intro to Databases",imgUrl:"images/columbia-logo.jpeg",positionName:"Teaching Assistant",timeFrame:"Sep 2021 - Dec 2021"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),l=g("div"),i=g("p"),r=y("I mentored students as they completed a project to design a database schema for an application of their choice. Together we thought through how to design schemas for applications like Facebook, or Yelp. When I was originally a student in the class, I "),n=g("a"),c=y("designed a database"),d=y(" for an application that helped multi-state residents choose which U.S. state they should vote in to maximize impact in national elections."),this.h()},l(o){e=p(o,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=T(h),l=p(h,"DIV",{class:!0});var w=b(l);i=p(w,"P",{class:!0});var _=b(i);r=I(_,"I mentored students as they completed a project to design a database schema for an application of their choice. Together we thought through how to design schemas for applications like Facebook, or Yelp. When I was originally a student in the class, I "),n=p(_,"A",{href:!0,target:!0});var k=b(n);c=I(k,"designed a database"),k.forEach(f),d=I(_," for an application that helped multi-state residents choose which U.S. state they should vote in to maximize impact in national elections."),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){u(n,"href","https://drive.google.com/file/d/1Z27ajnctm3tT4CgRvUm59ksRWx3h08-a/view?usp=share_link"),u(n,"target","_blank"),u(i,"class","svelte-1wxrt9b"),u(l,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","engineering experienceDiv svelte-1wxrt9b")},m(o,h){H(o,e,h),B(t,e,null),s(e,a),s(e,l),s(l,i),s(i,r),s(i,n),s(n,c),s(i,d),m=!0},i(o){m||(C(t.$$.fragment,o),m=!0)},o(o){A(t.$$.fragment,o),m=!1},d(o){o&&f(e),J(t)}}}function pe(v){let e,t,a,l,i,r,n,c,d,m;return t=new X({props:{companyName:"TheTake.ai",imgUrl:"images/thetake-logo.jpeg",positionName:"Software Engineering Intern",timeFrame:"Jun 2020 - Aug 2020"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),l=g("div"),i=g("p"),r=y("Have you ever wanted to buy the outfit of a TV or movie character? TheTake lets you shop shows and movies directly from your TV--their API powers "),n=g("a"),c=y("LG TV's"),d=y(` "Who What Where" feature. As an intern I built a generalized system to scrape data from clothing retailers' websites. The data I collected allowed the company to expand their database of clothes that could be matched to those in TV and movies scenes.`),this.h()},l(o){e=p(o,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=T(h),l=p(h,"DIV",{class:!0});var w=b(l);i=p(w,"P",{class:!0});var _=b(i);r=I(_,"Have you ever wanted to buy the outfit of a TV or movie character? TheTake lets you shop shows and movies directly from your TV--their API powers "),n=p(_,"A",{href:!0,target:!0});var k=b(n);c=I(k,"LG TV's"),k.forEach(f),d=I(_,` "Who What Where" feature. As an intern I built a generalized system to scrape data from clothing retailers' websites. The data I collected allowed the company to expand their database of clothes that could be matched to those in TV and movies scenes.`),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){u(n,"href","https://www.lg.com/us/press-release/thetake-and-lg-introduce-ai-powered-shoppable-tv-at-ces"),u(n,"target","_blank"),u(i,"class","svelte-1wxrt9b"),u(l,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","engineering experienceDiv svelte-1wxrt9b")},m(o,h){H(o,e,h),B(t,e,null),s(e,a),s(e,l),s(l,i),s(i,r),s(i,n),s(n,c),s(i,d),m=!0},i(o){m||(C(t.$$.fragment,o),m=!0)},o(o){A(t.$$.fragment,o),m=!1},d(o){o&&f(e),J(t)}}}function ve(v){let e,t,a,l,i,r,n,c,d,m,o,h,w,_,k,U;return t=new X({props:{companyName:"Columbia University Center for Nuclear Studies",imgUrl:"images/columbia-logo.jpeg",positionName:"Research Fellow",timeFrame:"May 2018 - Dec 2018"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),l=g("div"),i=g("p"),r=y("I developed an "),n=g("a"),c=y("interactive lesson plan"),d=y(` to help educators teach the geopolitical complications of nuclear proliferation. The lesson plan is used by high school teachers all across NYC, and it is taught in Columbia University's compulsory science class "Frontiers of Science."`),m=N(),o=g("p"),h=y("I also built "),w=g("a"),_=y("webpages"),k=y(" to attempt to visually convey the unconscionable scale and scope of nuclear weapons."),this.h()},l($){e=p($,"DIV",{class:!0});var S=b(e);Y(t.$$.fragment,S),a=T(S),l=p(S,"DIV",{class:!0});var V=b(l);i=p(V,"P",{class:!0});var z=b(i);r=I(z,"I developed an "),n=p(z,"A",{href:!0,target:!0});var P=b(n);c=I(P,"interactive lesson plan"),P.forEach(f),d=I(z,` to help educators teach the geopolitical complications of nuclear proliferation. The lesson plan is used by high school teachers all across NYC, and it is taught in Columbia University's compulsory science class "Frontiers of Science."`),z.forEach(f),m=T(V),o=p(V,"P",{class:!0});var E=b(o);h=I(E,"I also built "),w=p(E,"A",{href:!0,target:!0});var F=b(w);_=I(F,"webpages"),F.forEach(f),k=I(E," to attempt to visually convey the unconscionable scale and scope of nuclear weapons."),E.forEach(f),V.forEach(f),S.forEach(f),this.h()},h(){u(n,"href","https://k1project.columbia.edu/content/nuclear-diplomacy-simulation"),u(n,"target","_blank"),u(i,"class","svelte-1wxrt9b"),u(w,"href","https://k1project.columbia.edu/content/nuclear-weapons-context"),u(w,"target","_blank"),u(o,"class","svelte-1wxrt9b"),u(l,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","journ experienceDiv svelte-1wxrt9b")},m($,S){H($,e,S),B(t,e,null),s(e,a),s(e,l),s(l,i),s(i,r),s(i,n),s(n,c),s(i,d),s(l,m),s(l,o),s(o,h),s(o,w),s(w,_),s(o,k),U=!0},i($){U||(C(t.$$.fragment,$),U=!0)},o($){A(t.$$.fragment,$),U=!1},d($){$&&f(e),J(t)}}}function De(v){let e,t,a,l=v[0].includes("engineering"),i,r=v[0].includes("journ"),n,c=v[0].includes("civic"),d,m=v[0].includes("journ"),o,h=v[0].includes("journ"),w,_=v[0].includes("engineering"),k,U=v[0].includes("engineering"),$,S=v[0].includes("journ"),V,z=v[1],P=[];for(let D=0;D<z.length;D+=1)P[D]=ce(oe(v,z,D));let E=l&&de(),F=r&&ue(),j=c&&fe(),L=m&&he(),M=h&&me(),R=_&&ge(),q=U&&pe(),G=S&&ve();return{c(){e=g("div");for(let D=0;D<P.length;D+=1)P[D].c();t=N(),a=g("div"),E&&E.c(),i=N(),F&&F.c(),n=N(),j&&j.c(),d=N(),L&&L.c(),o=N(),M&&M.c(),w=N(),R&&R.c(),k=N(),q&&q.c(),$=N(),G&&G.c(),this.h()},l(D){e=p(D,"DIV",{id:!0,class:!0});var W=b(e);for(let ee=0;ee<P.length;ee+=1)P[ee].l(W);W.forEach(f),t=T(D),a=p(D,"DIV",{class:!0});var x=b(a);E&&E.l(x),i=T(x),F&&F.l(x),n=T(x),j&&j.l(x),d=T(x),L&&L.l(x),o=T(x),M&&M.l(x),w=T(x),R&&R.l(x),k=T(x),q&&q.l(x),$=T(x),G&&G.l(x),x.forEach(f),this.h()},h(){u(e,"id","toggleContainer"),u(e,"class","svelte-1wxrt9b"),u(a,"class","svelte-1wxrt9b")},m(D,W){H(D,e,W);for(let x=0;x<P.length;x+=1)P[x]&&P[x].m(e,null);H(D,t,W),H(D,a,W),E&&E.m(a,null),s(a,i),F&&F.m(a,null),s(a,n),j&&j.m(a,null),s(a,d),L&&L.m(a,null),s(a,o),M&&M.m(a,null),s(a,w),R&&R.m(a,null),s(a,k),q&&q.m(a,null),s(a,$),G&&G.m(a,null),V=!0},p(D,[W]){if(W&3){z=D[1];let x;for(x=0;x<z.length;x+=1){const ee=oe(D,z,x);P[x]?P[x].p(ee,W):(P[x]=ce(ee),P[x].c(),P[x].m(e,null))}for(;x<P.length;x+=1)P[x].d(1);P.length=z.length}W&1&&(l=D[0].includes("engineering")),l?E?W&1&&C(E,1):(E=de(),E.c(),C(E,1),E.m(a,i)):E&&(Z(),A(E,1,1,()=>{E=null}),K()),W&1&&(r=D[0].includes("journ")),r?F?W&1&&C(F,1):(F=ue(),F.c(),C(F,1),F.m(a,n)):F&&(Z(),A(F,1,1,()=>{F=null}),K()),W&1&&(c=D[0].includes("civic")),c?j?W&1&&C(j,1):(j=fe(),j.c(),C(j,1),j.m(a,d)):j&&(Z(),A(j,1,1,()=>{j=null}),K()),W&1&&(m=D[0].includes("journ")),m?L?W&1&&C(L,1):(L=he(),L.c(),C(L,1),L.m(a,o)):L&&(Z(),A(L,1,1,()=>{L=null}),K()),W&1&&(h=D[0].includes("journ")),h?M?W&1&&C(M,1):(M=me(),M.c(),C(M,1),M.m(a,w)):M&&(Z(),A(M,1,1,()=>{M=null}),K()),W&1&&(_=D[0].includes("engineering")),_?R?W&1&&C(R,1):(R=ge(),R.c(),C(R,1),R.m(a,k)):R&&(Z(),A(R,1,1,()=>{R=null}),K()),W&1&&(U=D[0].includes("engineering")),U?q?W&1&&C(q,1):(q=pe(),q.c(),C(q,1),q.m(a,$)):q&&(Z(),A(q,1,1,()=>{q=null}),K()),W&1&&(S=D[0].includes("journ")),S?G?W&1&&C(G,1):(G=ve(),G.c(),C(G,1),G.m(a,null)):G&&(Z(),A(G,1,1,()=>{G=null}),K())},i(D){V||(C(E),C(F),C(j),C(L),C(M),C(R),C(q),C(G),V=!0)},o(D){A(E),A(F),A(j),A(L),A(M),A(R),A(q),A(G),V=!1},d(D){D&&f(e),_e(P,D),D&&f(t),D&&f(a),E&&E.d(),F&&F.d(),j&&j.d(),L&&L.d(),M&&M.d(),R&&R.d(),q&&q.d(),G&&G.d()}}}function xe(v,e,t){let a=[{toggleName:"Backend Engineering",toggleCode:"engineering"},{toggleName:"Civic Tech",toggleCode:"civic"},{toggleName:"Journalism/Research",toggleCode:"journ"}],l=["engineering","civic","journ"];const i=[[]];function r(){l=we(i[0],this.__value,this.checked),t(0,l)}return[l,a,r,i]}class Pe extends te{constructor(e){super(),ae(this,e,xe,De,ie,{})}}function je(v){let e,t,a,l;return{c(){e=g("h4"),t=y("Curious to see what I look like? Click here"),this.h()},l(i){e=p(i,"H4",{class:!0});var r=b(e);t=I(r,"Curious to see what I look like? Click here"),r.forEach(f),this.h()},h(){u(e,"class","svelte-18t47ge")},m(i,r){H(i,e,r),s(e,t),a||(l=re(e,"click",v[2]),a=!0)},p:Q,i:Q,o:Q,d(i){i&&f(e),a=!1,l()}}}function Ve(v){let e,t,a,l,i,r,n,c,d,m,o;return{c(){e=g("div"),t=g("div"),a=g("img"),i=N(),r=g("h4"),n=y("Click here to close"),this.h()},l(h){e=p(h,"DIV",{class:!0});var w=b(e);t=p(w,"DIV",{class:!0});var _=b(t);a=p(_,"IMG",{src:!0,alt:!0,class:!0}),i=T(_),r=p(_,"H4",{class:!0});var k=b(r);n=I(k,"Click here to close"),k.forEach(f),_.forEach(f),w.forEach(f),this.h()},h(){le(a.src,l="images/headshot.jpg")||u(a,"src",l),u(a,"alt","headshot"),u(a,"class","svelte-18t47ge"),u(r,"class","svelte-18t47ge"),u(t,"class","content svelte-18t47ge"),u(e,"class","center svelte-18t47ge")},m(h,w){H(h,e,w),s(e,t),s(t,a),s(t,i),s(t,r),s(r,n),d=!0,m||(o=re(r,"click",v[2]),m=!0)},p(h,w){v=h},i(h){d||(ye(()=>{d&&(c||(c=ne(e,v[3],v[1],!0)),c.run(1))}),d=!0)},o(h){c||(c=ne(e,v[3],v[1],!1)),c.run(0),d=!1},d(h){h&&f(e),h&&c&&c.end(),m=!1,o()}}}function Ne(v){let e,t,a,l;const i=[Ve,je],r=[];function n(c,d){return c[0]?0:1}return t=n(v),a=r[t]=i[t](v),{c(){e=g("div"),a.c(),this.h()},l(c){e=p(c,"DIV",{id:!0,class:!0});var d=b(e);a.l(d),d.forEach(f),this.h()},h(){u(e,"id","container"),u(e,"class","svelte-18t47ge")},m(c,d){H(c,e,d),r[t].m(e,null),l=!0},p(c,[d]){let m=t;t=n(c),t===m?r[t].p(c,d):(Z(),A(r[m],1,1,()=>{r[m]=null}),K(),a=r[t],a?a.p(c,d):(a=r[t]=i[t](c),a.c()),C(a,1),a.m(e,null))},i(c){l||(C(a),l=!0)},o(c){A(a),l=!1},d(c){c&&f(e),r[t].d()}}}function Te(v,e,t){let a,l,i,r=!1;const n=()=>t(0,r=!r);function c(d,m){const{times:o=1}=m;return{...m,css(h){const w=360*o;return`transform: scale(${h}) rotate(${h*w}deg);`}}}return v.$$.update=()=>{v.$$.dirty&48&&t(1,i={duration:a,easing:l,times:2})},t(5,a=1e3),t(4,l=ke),[r,i,n,c,l,a]}class Ae extends te{constructor(e){super(),ae(this,e,Te,Ne,ie,{})}}function Ue(v){let e,t,a,l,i,r,n;return t=new $e({}),l=new Ae({}),r=new Pe({}),{c(){e=g("div"),O(t.$$.fragment),a=N(),O(l.$$.fragment),i=N(),O(r.$$.fragment),this.h()},l(c){e=p(c,"DIV",{class:!0});var d=b(e);Y(t.$$.fragment,d),a=T(d),Y(l.$$.fragment,d),i=T(d),Y(r.$$.fragment,d),d.forEach(f),this.h()},h(){u(e,"class","svelte-1jaeuos")},m(c,d){H(c,e,d),B(t,e,null),s(e,a),B(l,e,null),s(e,i),B(r,e,null),n=!0},p:Q,i(c){n||(C(t.$$.fragment,c),C(l.$$.fragment,c),C(r.$$.fragment,c),n=!0)},o(c){A(t.$$.fragment,c),A(l.$$.fragment,c),A(r.$$.fragment,c),n=!1},d(c){c&&f(e),J(t),J(l),J(r)}}}class Fe extends te{constructor(e){super(),ae(this,e,null,Ue,ie,{})}}export{Fe as default};
