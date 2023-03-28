import{S as te,i as ae,s as se,k as v,q as I,a as T,l as p,m as b,r as $,h as f,c as A,n as d,b as W,G as s,H as Q,J as le,u as ie,g as D,v as K,d as U,f as Z,K as _e,L as be,M as ne,y as H,z as Y,A as B,B as J,N as we,O as ye,P as ke,Q as re}from"../chunks/index.898f3223.js";function Ie(g){let e,t,a,i,l,o,r,n;return{c(){e=v("h2"),t=I("Matt Zinman"),a=T(),i=v("p"),l=I("Hi 👋. I'm interested in distributed systems, data journalism, and civic technology. Currently I work as a software engineer at Peloton where I build, design, and maintain the backend of the in-class leaderboard. You can reach me on "),o=v("a"),r=I("LinkedIn"),n=I(" or by email at mattalexzin@gmail.com."),this.h()},l(u){e=p(u,"H2",{});var m=b(e);t=$(m,"Matt Zinman"),m.forEach(f),a=A(u),i=p(u,"P",{class:!0});var c=b(i);l=$(c,"Hi 👋. I'm interested in distributed systems, data journalism, and civic technology. Currently I work as a software engineer at Peloton where I build, design, and maintain the backend of the in-class leaderboard. You can reach me on "),o=p(c,"A",{target:!0,href:!0});var h=b(o);r=$(h,"LinkedIn"),h.forEach(f),n=$(c," or by email at mattalexzin@gmail.com."),c.forEach(f),this.h()},h(){d(o,"target","_blank"),d(o,"href","https://www.linkedin.com/in/matt-zinman-480315153/"),d(i,"class","svelte-1hjseqx")},m(u,m){W(u,e,m),s(e,t),W(u,a,m),W(u,i,m),s(i,l),s(i,o),s(o,r),s(i,n)},p:Q,i:Q,o:Q,d(u){u&&f(e),u&&f(a),u&&f(i)}}}class $e extends te{constructor(e){super(),ae(this,e,null,Ie,se,{})}}function Ee(g){let e,t,a,i,l,o,r,n,u,m,c,h,w,_,y,F,E,R;return{c(){e=v("div"),t=v("div"),a=v("div"),i=v("p"),l=v("strong"),o=I(g[0]),r=T(),n=v("p"),u=I(g[2]),m=T(),c=v("p"),h=v("em"),w=I(g[3]),_=T(),y=v("div"),F=v("div"),E=v("img"),this.h()},l(V){e=p(V,"DIV",{id:!0,class:!0});var S=b(e);t=p(S,"DIV",{id:!0,class:!0});var P=b(t);a=p(P,"DIV",{id:!0});var C=b(a);i=p(C,"P",{class:!0});var N=b(i);l=p(N,"STRONG",{});var q=b(l);o=$(q,g[0]),q.forEach(f),N.forEach(f),r=A(C),n=p(C,"P",{class:!0});var x=b(n);u=$(x,g[2]),x.forEach(f),m=A(C),c=p(C,"P",{id:!0,class:!0});var L=b(c);h=p(L,"EM",{});var z=b(h);w=$(z,g[3]),z.forEach(f),L.forEach(f),C.forEach(f),P.forEach(f),_=A(S),y=p(S,"DIV",{id:!0,class:!0});var M=b(y);F=p(M,"DIV",{id:!0,class:!0});var G=b(F);E=p(G,"IMG",{src:!0,class:!0}),G.forEach(f),M.forEach(f),S.forEach(f),this.h()},h(){d(i,"class","svelte-1mg7az6"),d(n,"class","svelte-1mg7az6"),d(c,"id","timeframe"),d(c,"class","svelte-1mg7az6"),d(a,"id","companyNameContainer"),d(t,"id","companyNameColumn"),d(t,"class","svelte-1mg7az6"),le(E.src,R=g[1])||d(E,"src",R),d(E,"class","svelte-1mg7az6"),d(F,"id","imageContainer"),d(F,"class","svelte-1mg7az6"),d(y,"id","companyLogoColumn"),d(y,"class","svelte-1mg7az6"),d(e,"id","experienceContainer"),d(e,"class","svelte-1mg7az6")},m(V,S){W(V,e,S),s(e,t),s(t,a),s(a,i),s(i,l),s(l,o),s(a,r),s(a,n),s(n,u),s(a,m),s(a,c),s(c,h),s(h,w),s(e,_),s(e,y),s(y,F),s(F,E)},p(V,[S]){S&1&&ie(o,V[0]),S&4&&ie(u,V[2]),S&8&&ie(w,V[3]),S&2&&!le(E.src,R=V[1])&&d(E,"src",R)},i:Q,o:Q,d(V){V&&f(e)}}}function Ce(g,e,t){let{companyName:a=""}=e,{imgUrl:i=""}=e,{positionName:l=""}=e,{timeFrame:o=""}=e;return g.$$set=r=>{"companyName"in r&&t(0,a=r.companyName),"imgUrl"in r&&t(1,i=r.imgUrl),"positionName"in r&&t(2,l=r.positionName),"timeFrame"in r&&t(3,o=r.timeFrame)},[a,i,l,o]}class X extends te{constructor(e){super(),ae(this,e,Ce,Ee,se,{companyName:0,imgUrl:1,positionName:2,timeFrame:3})}}function oe(g,e,t){const a=g.slice();return a[4]=e[t],a}function ce(g){let e,t,a,i=g[4].toggleName+"",l,o,r,n,u,m;return n=be(g[3][0]),{c(){e=v("label"),t=v("input"),a=T(),l=I(i),o=T(),this.h()},l(c){e=p(c,"LABEL",{class:!0});var h=b(e);t=p(h,"INPUT",{type:!0,class:!0}),a=A(h),l=$(h,i),o=A(h),h.forEach(f),this.h()},h(){d(t,"type","checkbox"),t.__value=g[4].toggleCode,t.value=t.__value,d(t,"class","svelte-60xuv7"),d(e,"class",r=g[4].toggleCode+" "+(g[0].includes(g[4].toggleCode)?"selected":"")+" svelte-60xuv7"),n.p(t)},m(c,h){W(c,e,h),s(e,t),t.checked=~(g[0]||[]).indexOf(t.__value),s(e,a),s(e,l),s(e,o),u||(m=ne(t,"change",g[2]),u=!0)},p(c,h){h&1&&(t.checked=~(c[0]||[]).indexOf(t.__value)),h&1&&r!==(r=c[4].toggleCode+" "+(c[0].includes(c[4].toggleCode)?"selected":"")+" svelte-60xuv7")&&d(e,"class",r)},d(c){c&&f(e),n.r(),u=!1,m()}}}function ue(g){let e,t,a,i,l,o,r,n,u,m,c,h,w,_,y,F,E,R,V,S;return t=new X({props:{companyName:"Peloton",imgUrl:"images/peloton-logo.jpeg",positionName:"Software Engineer",timeFrame:"Aug 2022 - present"}}),{c(){e=v("div"),H(t.$$.fragment),a=T(),i=v("div"),l=v("p"),o=I("On Peloton's leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton's Apple Watch integration. I work with kubernetes, Kafka, Argo, datadog, python, and kotlin. Some highlights have been:"),r=T(),n=v("ul"),u=v("li"),m=I("Building and rolling out the micro-service that ingests all of Peloton's leaderboard data."),c=T(),h=v("li"),w=I("Testing, scaling, and maintaining the leaderboard for Peloton's "),_=v("a"),y=I("Ride to Greatness"),F=I(", an annual class where cyclers compete in teams."),E=T(),R=v("li"),V=I("Making it to semi-finals of the software org's ping pong tournament."),this.h()},l(P){e=p(P,"DIV",{class:!0});var C=b(e);Y(t.$$.fragment,C),a=A(C),i=p(C,"DIV",{class:!0});var N=b(i);l=p(N,"P",{class:!0});var q=b(l);o=$(q,"On Peloton's leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton's Apple Watch integration. I work with kubernetes, Kafka, Argo, datadog, python, and kotlin. Some highlights have been:"),q.forEach(f),r=A(N),n=p(N,"UL",{class:!0});var x=b(n);u=p(x,"LI",{});var L=b(u);m=$(L,"Building and rolling out the micro-service that ingests all of Peloton's leaderboard data."),L.forEach(f),c=A(x),h=p(x,"LI",{});var z=b(h);w=$(z,"Testing, scaling, and maintaining the leaderboard for Peloton's "),_=p(z,"A",{href:!0,target:!0});var M=b(_);y=$(M,"Ride to Greatness"),M.forEach(f),F=$(z,", an annual class where cyclers compete in teams."),z.forEach(f),E=A(x),R=p(x,"LI",{});var G=b(R);V=$(G,"Making it to semi-finals of the software org's ping pong tournament."),G.forEach(f),x.forEach(f),N.forEach(f),C.forEach(f),this.h()},h(){d(l,"class","svelte-60xuv7"),d(_,"href","https://www.onepeloton.com/blog/ridetogreatness/"),d(_,"target","_blank"),d(n,"class","svelte-60xuv7"),d(i,"class","descriptionContainer svelte-60xuv7"),d(e,"class","engineering experienceDiv svelte-60xuv7")},m(P,C){W(P,e,C),B(t,e,null),s(e,a),s(e,i),s(i,l),s(l,o),s(i,r),s(i,n),s(n,u),s(u,m),s(n,c),s(n,h),s(h,w),s(h,_),s(_,y),s(h,F),s(n,E),s(n,R),s(R,V),S=!0},i(P){S||(D(t.$$.fragment,P),S=!0)},o(P){U(t.$$.fragment,P),S=!1},d(P){P&&f(e),J(t)}}}function de(g){let e,t,a,i,l,o,r,n,u,m,c,h,w;return t=new X({props:{companyName:"Columbia Journalism School",imgUrl:"images/columbia-journalism.jpeg",positionName:"Research Scholar",timeFrame:"Jul 2022 - Aug 2022"}}),{c(){e=v("div"),H(t.$$.fragment),a=T(),i=v("div"),l=v("p"),o=I("I conducted a "),r=v("a"),n=I("data-driven investigation"),u=I(" into pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians."),m=T(),c=v("p"),h=I("I also worked on a project to study how political misinformation spreads on Twitter. I wrote jupyter notebooks describing patterns in a giant Twitter dataset that I collected from the Twitter API. I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks."),this.h()},l(_){e=p(_,"DIV",{class:!0});var y=b(e);Y(t.$$.fragment,y),a=A(y),i=p(y,"DIV",{class:!0});var F=b(i);l=p(F,"P",{class:!0});var E=b(l);o=$(E,"I conducted a "),r=p(E,"A",{href:!0,target:!0});var R=b(r);n=$(R,"data-driven investigation"),R.forEach(f),u=$(E," into pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians."),E.forEach(f),m=A(F),c=p(F,"P",{class:!0});var V=b(c);h=$(V,"I also worked on a project to study how political misinformation spreads on Twitter. I wrote jupyter notebooks describing patterns in a giant Twitter dataset that I collected from the Twitter API. I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks."),V.forEach(f),F.forEach(f),y.forEach(f),this.h()},h(){d(r,"href","https://drive.google.com/file/d/1WRKum_9bb_sQHFYhV-8BvLE1P7VjFa_A/view?usp=share_link"),d(r,"target","_blank"),d(l,"class","svelte-60xuv7"),d(c,"class","svelte-60xuv7"),d(i,"class","descriptionContainer svelte-60xuv7"),d(e,"class","journ experienceDiv svelte-60xuv7")},m(_,y){W(_,e,y),B(t,e,null),s(e,a),s(e,i),s(i,l),s(l,o),s(l,r),s(r,n),s(l,u),s(i,m),s(i,c),s(c,h),w=!0},i(_){w||(D(t.$$.fragment,_),w=!0)},o(_){U(t.$$.fragment,_),w=!1},d(_){_&&f(e),J(t)}}}function fe(g){let e,t,a,i,l,o,r,n,u;return t=new X({props:{companyName:"GrassRoutes Canvassing",imgUrl:"images/grassroutes-logo.jpeg",positionName:"Co-Founder and Chief Product Officer",timeFrame:"Sept 2019 - Nov 2021"}}),{c(){e=v("div"),H(t.$$.fragment),a=T(),i=v("div"),l=v("p"),o=v("a"),r=I("GrassRoutes"),n=I(" provided local politicians with software tools to run data-driven campaigns at low cost. As the Chief Product Officer I worked with local campaigns to design intuitive and useful product features, and I implemented the frontend of the app using React. GrassRoutes was used by 5+ campaigns in 3+ states during the Novemeber 2020 election. The app was acquired in the fall of 2021."),this.h()},l(m){e=p(m,"DIV",{class:!0});var c=b(e);Y(t.$$.fragment,c),a=A(c),i=p(c,"DIV",{class:!0});var h=b(i);l=p(h,"P",{class:!0});var w=b(l);o=p(w,"A",{href:!0,target:!0});var _=b(o);r=$(_,"GrassRoutes"),_.forEach(f),n=$(w," provided local politicians with software tools to run data-driven campaigns at low cost. As the Chief Product Officer I worked with local campaigns to design intuitive and useful product features, and I implemented the frontend of the app using React. GrassRoutes was used by 5+ campaigns in 3+ states during the Novemeber 2020 election. The app was acquired in the fall of 2021."),w.forEach(f),h.forEach(f),c.forEach(f),this.h()},h(){d(o,"href","https://docs.google.com/document/d/1fnqta0BnJDkPnsSZvVqRuiFReDBcAwhaep8Y7uckXFU/edit?usp=sharing"),d(o,"target","_blank"),d(l,"class","svelte-60xuv7"),d(i,"class","descriptionContainer svelte-60xuv7"),d(e,"class","civic experienceDiv svelte-60xuv7")},m(m,c){W(m,e,c),B(t,e,null),s(e,a),s(e,i),s(i,l),s(l,o),s(o,r),s(l,n),u=!0},i(m){u||(D(t.$$.fragment,m),u=!0)},o(m){U(t.$$.fragment,m),u=!1},d(m){m&&f(e),J(t)}}}function he(g){let e,t,a,i,l,o,r,n,u,m,c,h,w;return t=new X({props:{companyName:"Social Science Research Council",imgUrl:"images/ssrc-logo.jpeg",timeFrame:"Jan 2021 - May 2021"}}),{c(){e=v("div"),H(t.$$.fragment),a=T(),i=v("div"),l=v("p"),o=I("I worked as a research assistant for several projects that combined qualitative and quantitative approaches to understand policy's impact on human well-being. You can read my work in "),r=v("a"),n=I("A Portrait of California 2021–2022"),u=I(" and "),m=v("a"),c=I("A Decade Undone: 2021 Update"),h=I("."),this.h()},l(_){e=p(_,"DIV",{class:!0});var y=b(e);Y(t.$$.fragment,y),a=A(y),i=p(y,"DIV",{class:!0});var F=b(i);l=p(F,"P",{class:!0});var E=b(l);o=$(E,"I worked as a research assistant for several projects that combined qualitative and quantitative approaches to understand policy's impact on human well-being. You can read my work in "),r=p(E,"A",{href:!0,target:!0});var R=b(r);n=$(R,"A Portrait of California 2021–2022"),R.forEach(f),u=$(E," and "),m=p(E,"A",{href:!0,target:!0});var V=b(m);c=$(V,"A Decade Undone: 2021 Update"),V.forEach(f),h=$(E,"."),E.forEach(f),F.forEach(f),y.forEach(f),this.h()},h(){d(r,"href","https://measureofamerica.org/california2021-22/"),d(r,"target","_blank"),d(m,"href","http://measureofamerica.org/youth-disconnection-2021/"),d(m,"target","_blank"),d(l,"class","svelte-60xuv7"),d(i,"class","descriptionContainer svelte-60xuv7"),d(e,"class","journ experienceDiv svelte-60xuv7")},m(_,y){W(_,e,y),B(t,e,null),s(e,a),s(e,i),s(i,l),s(l,o),s(l,r),s(r,n),s(l,u),s(l,m),s(m,c),s(l,h),w=!0},i(_){w||(D(t.$$.fragment,_),w=!0)},o(_){U(t.$$.fragment,_),w=!1},d(_){_&&f(e),J(t)}}}function me(g){let e,t,a,i,l,o,r,n,u,m;return t=new X({props:{companyName:"Incite Lab at Columbia University",imgUrl:"images/incite-logo.jpeg",timeFrame:"Jan 2022 - May 2022"}}),{c(){e=v("div"),H(t.$$.fragment),a=T(),i=v("div"),l=v("p"),o=I("I built an "),r=v("a"),n=I("interactive webite"),u=I(" to visually convey the methodology and results of an academic article about geographic disparities in access to mental healthcare."),this.h()},l(c){e=p(c,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=A(h),i=p(h,"DIV",{class:!0});var w=b(i);l=p(w,"P",{class:!0});var _=b(l);o=$(_,"I built an "),r=p(_,"A",{href:!0,target:!0});var y=b(r);n=$(y,"interactive webite"),y.forEach(f),u=$(_," to visually convey the methodology and results of an academic article about geographic disparities in access to mental healthcare."),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){d(r,"href","https://www.danieltadmon.com/public-sociology/therapymaps/"),d(r,"target","_blank"),d(l,"class","svelte-60xuv7"),d(i,"class","descriptionContainer svelte-60xuv7"),d(e,"class","journ experienceDiv svelte-60xuv7")},m(c,h){W(c,e,h),B(t,e,null),s(e,a),s(e,i),s(i,l),s(l,o),s(l,r),s(r,n),s(l,u),m=!0},i(c){m||(D(t.$$.fragment,c),m=!0)},o(c){U(t.$$.fragment,c),m=!1},d(c){c&&f(e),J(t)}}}function ge(g){let e,t,a,i,l,o,r,n,u,m;return t=new X({props:{companyName:"COMS 4111 Intro to Databases",imgUrl:"images/columbia-logo.jpeg",positionName:"Teaching Assistant",timeFrame:"Sep 2021 - Dec 2021"}}),{c(){e=v("div"),H(t.$$.fragment),a=T(),i=v("div"),l=v("p"),o=I("I mentored students as they completed a project to design a database schema for an application of their choice. This required me to consider the database design of many varied projects: how would I design Facebook's database? Or Yelp's? When I was originally a student in the class, I "),r=v("a"),n=I("designed a database"),u=I(" for an application that helped multi-state residents strategically decide which U.S. state they should vote in for national elections."),this.h()},l(c){e=p(c,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=A(h),i=p(h,"DIV",{class:!0});var w=b(i);l=p(w,"P",{class:!0});var _=b(l);o=$(_,"I mentored students as they completed a project to design a database schema for an application of their choice. This required me to consider the database design of many varied projects: how would I design Facebook's database? Or Yelp's? When I was originally a student in the class, I "),r=p(_,"A",{href:!0,target:!0});var y=b(r);n=$(y,"designed a database"),y.forEach(f),u=$(_," for an application that helped multi-state residents strategically decide which U.S. state they should vote in for national elections."),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){d(r,"href","https://drive.google.com/file/d/1Z27ajnctm3tT4CgRvUm59ksRWx3h08-a/view?usp=share_link"),d(r,"target","_blank"),d(l,"class","svelte-60xuv7"),d(i,"class","descriptionContainer svelte-60xuv7"),d(e,"class","engineering experienceDiv svelte-60xuv7")},m(c,h){W(c,e,h),B(t,e,null),s(e,a),s(e,i),s(i,l),s(l,o),s(l,r),s(r,n),s(l,u),m=!0},i(c){m||(D(t.$$.fragment,c),m=!0)},o(c){U(t.$$.fragment,c),m=!1},d(c){c&&f(e),J(t)}}}function ve(g){let e,t,a,i,l,o,r,n,u,m;return t=new X({props:{companyName:"TheTake.ai",imgUrl:"images/thetake-logo.jpeg",positionName:"Software Engineering Intern",timeFrame:"Jun 2020 - Aug 2020"}}),{c(){e=v("div"),H(t.$$.fragment),a=T(),i=v("div"),l=v("p"),o=I("Have you ever wanted to buy the outfit of a TV or movie character? TheTake lets you shop shows and movies directly from your TV--their API powers "),r=v("a"),n=I("LG TV's"),u=I(` "Who What Where" feature. As an intern I built a generalized system to scrape data from clothing retailers' websites. The data I collected allowed the company to expand their database of clothes that could be matched to those in TV and movies scenes.`),this.h()},l(c){e=p(c,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=A(h),i=p(h,"DIV",{class:!0});var w=b(i);l=p(w,"P",{class:!0});var _=b(l);o=$(_,"Have you ever wanted to buy the outfit of a TV or movie character? TheTake lets you shop shows and movies directly from your TV--their API powers "),r=p(_,"A",{href:!0,target:!0});var y=b(r);n=$(y,"LG TV's"),y.forEach(f),u=$(_,` "Who What Where" feature. As an intern I built a generalized system to scrape data from clothing retailers' websites. The data I collected allowed the company to expand their database of clothes that could be matched to those in TV and movies scenes.`),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){d(r,"href","https://www.lg.com/us/press-release/thetake-and-lg-introduce-ai-powered-shoppable-tv-at-ces"),d(r,"target","_blank"),d(l,"class","svelte-60xuv7"),d(i,"class","descriptionContainer svelte-60xuv7"),d(e,"class","engineering experienceDiv svelte-60xuv7")},m(c,h){W(c,e,h),B(t,e,null),s(e,a),s(e,i),s(i,l),s(l,o),s(l,r),s(r,n),s(l,u),m=!0},i(c){m||(D(t.$$.fragment,c),m=!0)},o(c){U(t.$$.fragment,c),m=!1},d(c){c&&f(e),J(t)}}}function pe(g){let e,t,a,i,l,o,r,n,u,m,c,h,w,_,y,F;return t=new X({props:{companyName:"Columbia University Center for Nuclear Studies",imgUrl:"images/columbia-logo.jpeg",positionName:"Research Fellow",timeFrame:"May 2018 - Dec 2018"}}),{c(){e=v("div"),H(t.$$.fragment),a=T(),i=v("div"),l=v("p"),o=I("I developed an "),r=v("a"),n=I("interactive lesson plan"),u=I(` to help educators teach the geopolitical complications of nuclear proliferation. The lesson plan is used by high school teachers all across NYC, and it is taught in Columbia University's compulsory science class "Frontiers of Science."`),m=T(),c=v("p"),h=I("I also built "),w=v("a"),_=I("webpages"),y=I(" to attempt to visually convey the unconscionable scale and scope of nuclear weapons."),this.h()},l(E){e=p(E,"DIV",{class:!0});var R=b(e);Y(t.$$.fragment,R),a=A(R),i=p(R,"DIV",{class:!0});var V=b(i);l=p(V,"P",{class:!0});var S=b(l);o=$(S,"I developed an "),r=p(S,"A",{href:!0,target:!0});var P=b(r);n=$(P,"interactive lesson plan"),P.forEach(f),u=$(S,` to help educators teach the geopolitical complications of nuclear proliferation. The lesson plan is used by high school teachers all across NYC, and it is taught in Columbia University's compulsory science class "Frontiers of Science."`),S.forEach(f),m=A(V),c=p(V,"P",{class:!0});var C=b(c);h=$(C,"I also built "),w=p(C,"A",{href:!0,target:!0});var N=b(w);_=$(N,"webpages"),N.forEach(f),y=$(C," to attempt to visually convey the unconscionable scale and scope of nuclear weapons."),C.forEach(f),V.forEach(f),R.forEach(f),this.h()},h(){d(r,"href","https://k1project.columbia.edu/content/nuclear-diplomacy-simulation"),d(r,"target","_blank"),d(l,"class","svelte-60xuv7"),d(w,"href","https://k1project.columbia.edu/content/nuclear-weapons-context"),d(w,"target","_blank"),d(c,"class","svelte-60xuv7"),d(i,"class","descriptionContainer svelte-60xuv7"),d(e,"class","journ experienceDiv svelte-60xuv7")},m(E,R){W(E,e,R),B(t,e,null),s(e,a),s(e,i),s(i,l),s(l,o),s(l,r),s(r,n),s(l,u),s(i,m),s(i,c),s(c,h),s(c,w),s(w,_),s(c,y),F=!0},i(E){F||(D(t.$$.fragment,E),F=!0)},o(E){U(t.$$.fragment,E),F=!1},d(E){E&&f(e),J(t)}}}function De(g){let e,t,a,i=g[0].length==0||g[0].includes("engineering"),l,o=g[0].length==0||g[0].includes("journ"),r,n=g[0].length==0||g[0].includes("civic"),u,m=g[0].length==0||g[0].includes("journ"),c,h=g[0].length==0||g[0].includes("journ"),w,_=g[0].length==0||g[0].includes("engineering"),y,F=g[0].length==0||g[0].includes("engineering"),E,R=g[0].length==0||g[0].includes("journ"),V,S=g[1],P=[];for(let k=0;k<S.length;k+=1)P[k]=ce(oe(g,S,k));let C=i&&ue(),N=o&&de(),q=n&&fe(),x=m&&he(),L=h&&me(),z=_&&ge(),M=F&&ve(),G=R&&pe();return{c(){e=v("div");for(let k=0;k<P.length;k+=1)P[k].c();t=T(),a=v("div"),C&&C.c(),l=T(),N&&N.c(),r=T(),q&&q.c(),u=T(),x&&x.c(),c=T(),L&&L.c(),w=T(),z&&z.c(),y=T(),M&&M.c(),E=T(),G&&G.c(),this.h()},l(k){e=p(k,"DIV",{id:!0,class:!0});var O=b(e);for(let ee=0;ee<P.length;ee+=1)P[ee].l(O);O.forEach(f),t=A(k),a=p(k,"DIV",{class:!0});var j=b(a);C&&C.l(j),l=A(j),N&&N.l(j),r=A(j),q&&q.l(j),u=A(j),x&&x.l(j),c=A(j),L&&L.l(j),w=A(j),z&&z.l(j),y=A(j),M&&M.l(j),E=A(j),G&&G.l(j),j.forEach(f),this.h()},h(){d(e,"id","toggleContainer"),d(e,"class","svelte-60xuv7"),d(a,"class","svelte-60xuv7")},m(k,O){W(k,e,O);for(let j=0;j<P.length;j+=1)P[j]&&P[j].m(e,null);W(k,t,O),W(k,a,O),C&&C.m(a,null),s(a,l),N&&N.m(a,null),s(a,r),q&&q.m(a,null),s(a,u),x&&x.m(a,null),s(a,c),L&&L.m(a,null),s(a,w),z&&z.m(a,null),s(a,y),M&&M.m(a,null),s(a,E),G&&G.m(a,null),V=!0},p(k,[O]){if(O&3){S=k[1];let j;for(j=0;j<S.length;j+=1){const ee=oe(k,S,j);P[j]?P[j].p(ee,O):(P[j]=ce(ee),P[j].c(),P[j].m(e,null))}for(;j<P.length;j+=1)P[j].d(1);P.length=S.length}O&1&&(i=k[0].length==0||k[0].includes("engineering")),i?C?O&1&&D(C,1):(C=ue(),C.c(),D(C,1),C.m(a,l)):C&&(K(),U(C,1,1,()=>{C=null}),Z()),O&1&&(o=k[0].length==0||k[0].includes("journ")),o?N?O&1&&D(N,1):(N=de(),N.c(),D(N,1),N.m(a,r)):N&&(K(),U(N,1,1,()=>{N=null}),Z()),O&1&&(n=k[0].length==0||k[0].includes("civic")),n?q?O&1&&D(q,1):(q=fe(),q.c(),D(q,1),q.m(a,u)):q&&(K(),U(q,1,1,()=>{q=null}),Z()),O&1&&(m=k[0].length==0||k[0].includes("journ")),m?x?O&1&&D(x,1):(x=he(),x.c(),D(x,1),x.m(a,c)):x&&(K(),U(x,1,1,()=>{x=null}),Z()),O&1&&(h=k[0].length==0||k[0].includes("journ")),h?L?O&1&&D(L,1):(L=me(),L.c(),D(L,1),L.m(a,w)):L&&(K(),U(L,1,1,()=>{L=null}),Z()),O&1&&(_=k[0].length==0||k[0].includes("engineering")),_?z?O&1&&D(z,1):(z=ge(),z.c(),D(z,1),z.m(a,y)):z&&(K(),U(z,1,1,()=>{z=null}),Z()),O&1&&(F=k[0].length==0||k[0].includes("engineering")),F?M?O&1&&D(M,1):(M=ve(),M.c(),D(M,1),M.m(a,E)):M&&(K(),U(M,1,1,()=>{M=null}),Z()),O&1&&(R=k[0].length==0||k[0].includes("journ")),R?G?O&1&&D(G,1):(G=pe(),G.c(),D(G,1),G.m(a,null)):G&&(K(),U(G,1,1,()=>{G=null}),Z())},i(k){V||(D(C),D(N),D(q),D(x),D(L),D(z),D(M),D(G),V=!0)},o(k){U(C),U(N),U(q),U(x),U(L),U(z),U(M),U(G),V=!1},d(k){k&&f(e),_e(P,k),k&&f(t),k&&f(a),C&&C.d(),N&&N.d(),q&&q.d(),x&&x.d(),L&&L.d(),z&&z.d(),M&&M.d(),G&&G.d()}}}function je(g,e,t){let a=[{toggleName:"Backend Engineering",toggleCode:"engineering"},{toggleName:"Civic Tech",toggleCode:"civic"},{toggleName:"Journalism/Research",toggleCode:"journ"}],i=[];const l=[[]];function o(){i=we(l[0],this.__value,this.checked),t(0,i)}return[i,a,o,l]}class Pe extends te{constructor(e){super(),ae(this,e,je,De,se,{})}}function Ve(g){let e,t,a,i;return{c(){e=v("h4"),t=I("Curious to see what I look like? Click here"),this.h()},l(l){e=p(l,"H4",{class:!0});var o=b(e);t=$(o,"Curious to see what I look like? Click here"),o.forEach(f),this.h()},h(){d(e,"class","svelte-18t47ge")},m(l,o){W(l,e,o),s(e,t),a||(i=ne(e,"click",g[2]),a=!0)},p:Q,i:Q,o:Q,d(l){l&&f(e),a=!1,i()}}}function Ne(g){let e,t,a,i,l,o,r,n,u,m,c;return{c(){e=v("div"),t=v("div"),a=v("img"),l=T(),o=v("h4"),r=I("Click here to close"),this.h()},l(h){e=p(h,"DIV",{class:!0});var w=b(e);t=p(w,"DIV",{class:!0});var _=b(t);a=p(_,"IMG",{src:!0,alt:!0,class:!0}),l=A(_),o=p(_,"H4",{class:!0});var y=b(o);r=$(y,"Click here to close"),y.forEach(f),_.forEach(f),w.forEach(f),this.h()},h(){le(a.src,i="images/headshot.jpg")||d(a,"src",i),d(a,"alt","headshot"),d(a,"class","svelte-18t47ge"),d(o,"class","svelte-18t47ge"),d(t,"class","content svelte-18t47ge"),d(e,"class","center svelte-18t47ge")},m(h,w){W(h,e,w),s(e,t),s(t,a),s(t,l),s(t,o),s(o,r),u=!0,m||(c=ne(o,"click",g[2]),m=!0)},p(h,w){g=h},i(h){u||(ke(()=>{u&&(n||(n=re(e,g[3],g[1],!0)),n.run(1))}),u=!0)},o(h){n||(n=re(e,g[3],g[1],!1)),n.run(0),u=!1},d(h){h&&f(e),h&&n&&n.end(),m=!1,c()}}}function Te(g){let e,t,a,i;const l=[Ne,Ve],o=[];function r(n,u){return n[0]?0:1}return t=r(g),a=o[t]=l[t](g),{c(){e=v("div"),a.c(),this.h()},l(n){e=p(n,"DIV",{id:!0,class:!0});var u=b(e);a.l(u),u.forEach(f),this.h()},h(){d(e,"id","container"),d(e,"class","svelte-18t47ge")},m(n,u){W(n,e,u),o[t].m(e,null),i=!0},p(n,[u]){let m=t;t=r(n),t===m?o[t].p(n,u):(K(),U(o[m],1,1,()=>{o[m]=null}),Z(),a=o[t],a?a.p(n,u):(a=o[t]=l[t](n),a.c()),D(a,1),a.m(e,null))},i(n){i||(D(a),i=!0)},o(n){U(a),i=!1},d(n){n&&f(e),o[t].d()}}}function Ae(g,e,t){let a,i,l,o=!1;const r=()=>t(0,o=!o);function n(u,m){const{times:c=1}=m;return{...m,css(h){const w=360*c;return`transform: scale(${h}) rotate(${h*w}deg);`}}}return g.$$.update=()=>{g.$$.dirty&48&&t(1,l={duration:a,easing:i,times:2})},t(5,a=1e3),t(4,i=ye),[o,l,r,n,i,a]}class xe extends te{constructor(e){super(),ae(this,e,Ae,Te,se,{})}}function Ue(g){let e,t,a,i,l,o,r;return t=new $e({}),i=new xe({}),o=new Pe({}),{c(){e=v("div"),H(t.$$.fragment),a=T(),H(i.$$.fragment),l=T(),H(o.$$.fragment),this.h()},l(n){e=p(n,"DIV",{class:!0});var u=b(e);Y(t.$$.fragment,u),a=A(u),Y(i.$$.fragment,u),l=A(u),Y(o.$$.fragment,u),u.forEach(f),this.h()},h(){d(e,"class","svelte-1jaeuos")},m(n,u){W(n,e,u),B(t,e,null),s(e,a),B(i,e,null),s(e,l),B(o,e,null),r=!0},p:Q,i(n){r||(D(t.$$.fragment,n),D(i.$$.fragment,n),D(o.$$.fragment,n),r=!0)},o(n){U(t.$$.fragment,n),U(i.$$.fragment,n),U(o.$$.fragment,n),r=!1},d(n){n&&f(e),J(t),J(i),J(o)}}}class Se extends te{constructor(e){super(),ae(this,e,null,Ue,se,{})}}export{Se as default};
