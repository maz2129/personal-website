import{S as te,i as ae,s as ie,k as g,q as y,a as N,l as p,m as b,r as I,h as f,c as T,n as u,b as H,G as i,H as Q,J as le,u as se,g as C,v as Z,d as U,f as K,K as _e,L as be,M as re,y as O,z as Y,A as B,B as J,N as we,O as ke,P as ye,Q as ne}from"../chunks/index.898f3223.js";function Ie(v){let e,t,a,s,l,o,n,r;return{c(){e=g("h2"),t=y("Matt Zinman"),a=N(),s=g("p"),l=y("Hi 👋. I'm interested in distributed systems, data journalism, and civic technology. Currently I work as a software engineer at Peloton where I build, design, and maintain Peloton's highly scalable metrics ingestion pipeline and its related services like the in-class leaderboard. You can reach me on "),o=g("a"),n=y("LinkedIn"),r=y(" or by email at mattalexzin@gmail.com."),this.h()},l(d){e=p(d,"H2",{});var m=b(e);t=I(m,"Matt Zinman"),m.forEach(f),a=T(d),s=p(d,"P",{class:!0});var c=b(s);l=I(c,"Hi 👋. I'm interested in distributed systems, data journalism, and civic technology. Currently I work as a software engineer at Peloton where I build, design, and maintain Peloton's highly scalable metrics ingestion pipeline and its related services like the in-class leaderboard. You can reach me on "),o=p(c,"A",{target:!0,href:!0});var h=b(o);n=I(h,"LinkedIn"),h.forEach(f),r=I(c," or by email at mattalexzin@gmail.com."),c.forEach(f),this.h()},h(){u(o,"target","_blank"),u(o,"href","https://www.linkedin.com/in/matt-zinman-480315153/"),u(s,"class","svelte-1hjseqx")},m(d,m){H(d,e,m),i(e,t),H(d,a,m),H(d,s,m),i(s,l),i(s,o),i(o,n),i(s,r)},p:Q,i:Q,o:Q,d(d){d&&f(e),d&&f(a),d&&f(s)}}}class $e extends te{constructor(e){super(),ae(this,e,null,Ie,ie,{})}}function Ee(v){let e,t,a,s,l,o,n,r,d,m,c,h,w,_,k,z,$,S;return{c(){e=g("div"),t=g("div"),a=g("div"),s=g("p"),l=g("strong"),o=y(v[0]),n=N(),r=g("p"),d=y(v[2]),m=N(),c=g("p"),h=g("em"),w=y(v[3]),_=N(),k=g("div"),z=g("div"),$=g("img"),this.h()},l(j){e=p(j,"DIV",{id:!0,class:!0});var F=b(e);t=p(F,"DIV",{id:!0,class:!0});var P=b(t);a=p(P,"DIV",{id:!0});var E=b(a);s=p(E,"P",{class:!0});var V=b(s);l=p(V,"STRONG",{});var L=b(l);o=I(L,v[0]),L.forEach(f),V.forEach(f),n=T(E),r=p(E,"P",{class:!0});var A=b(r);d=I(A,v[2]),A.forEach(f),m=T(E),c=p(E,"P",{id:!0,class:!0});var M=b(c);h=p(M,"EM",{});var R=b(h);w=I(R,v[3]),R.forEach(f),M.forEach(f),E.forEach(f),P.forEach(f),_=T(F),k=p(F,"DIV",{id:!0,class:!0});var q=b(k);z=p(q,"DIV",{id:!0,class:!0});var G=b(z);$=p(G,"IMG",{src:!0,class:!0}),G.forEach(f),q.forEach(f),F.forEach(f),this.h()},h(){u(s,"class","svelte-1mg7az6"),u(r,"class","svelte-1mg7az6"),u(c,"id","timeframe"),u(c,"class","svelte-1mg7az6"),u(a,"id","companyNameContainer"),u(t,"id","companyNameColumn"),u(t,"class","svelte-1mg7az6"),le($.src,S=v[1])||u($,"src",S),u($,"class","svelte-1mg7az6"),u(z,"id","imageContainer"),u(z,"class","svelte-1mg7az6"),u(k,"id","companyLogoColumn"),u(k,"class","svelte-1mg7az6"),u(e,"id","experienceContainer"),u(e,"class","svelte-1mg7az6")},m(j,F){H(j,e,F),i(e,t),i(t,a),i(a,s),i(s,l),i(l,o),i(a,n),i(a,r),i(r,d),i(a,m),i(a,c),i(c,h),i(h,w),i(e,_),i(e,k),i(k,z),i(z,$)},p(j,[F]){F&1&&se(o,j[0]),F&4&&se(d,j[2]),F&8&&se(w,j[3]),F&2&&!le($.src,S=j[1])&&u($,"src",S)},i:Q,o:Q,d(j){j&&f(e)}}}function Ce(v,e,t){let{companyName:a=""}=e,{imgUrl:s=""}=e,{positionName:l=""}=e,{timeFrame:o=""}=e;return v.$$set=n=>{"companyName"in n&&t(0,a=n.companyName),"imgUrl"in n&&t(1,s=n.imgUrl),"positionName"in n&&t(2,l=n.positionName),"timeFrame"in n&&t(3,o=n.timeFrame)},[a,s,l,o]}class X extends te{constructor(e){super(),ae(this,e,Ce,Ee,ie,{companyName:0,imgUrl:1,positionName:2,timeFrame:3})}}function oe(v,e,t){const a=v.slice();return a[4]=e[t],a}function ce(v){let e,t,a,s=v[4].toggleName+"",l,o,n,r,d,m;return r=be(v[3][0]),{c(){e=g("label"),t=g("input"),a=N(),l=y(s),o=N(),this.h()},l(c){e=p(c,"LABEL",{class:!0});var h=b(e);t=p(h,"INPUT",{type:!0,class:!0}),a=T(h),l=I(h,s),o=T(h),h.forEach(f),this.h()},h(){u(t,"type","checkbox"),t.__value=v[4].toggleCode,t.value=t.__value,u(t,"class","svelte-1wxrt9b"),u(e,"class",n=v[4].toggleCode+" "+(v[0].includes(v[4].toggleCode)?"selected":"")+" svelte-1wxrt9b"),r.p(t)},m(c,h){H(c,e,h),i(e,t),t.checked=~(v[0]||[]).indexOf(t.__value),i(e,a),i(e,l),i(e,o),d||(m=re(t,"change",v[2]),d=!0)},p(c,h){h&1&&(t.checked=~(c[0]||[]).indexOf(t.__value)),h&1&&n!==(n=c[4].toggleCode+" "+(c[0].includes(c[4].toggleCode)?"selected":"")+" svelte-1wxrt9b")&&u(e,"class",n)},d(c){c&&f(e),r.r(),d=!1,m()}}}function de(v){let e,t,a,s,l,o,n,r,d,m,c,h,w,_,k,z,$,S,j,F;return t=new X({props:{companyName:"Peloton",imgUrl:"images/peloton-logo.jpeg",positionName:"Software Engineer",timeFrame:"Aug 2022 - present"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),s=g("div"),l=g("p"),o=y("On Peloton's leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton's Apple Watch integration. I work with kubernetes, kafka, redis, dynamodb, postgres, argo, datadog, python, kotlin, etc. Some highlights have been:"),n=N(),r=g("ul"),d=g("li"),m=y("Building and rolling out the micro-service that ingests all of Peloton's leaderboard data."),c=N(),h=g("li"),w=y("Testing, scaling, and maintaining the leaderboard for Peloton's "),_=g("a"),k=y("Ride to Greatness"),z=y(", an annual class where cyclers compete in teams."),$=N(),S=g("li"),j=y("Making it to semi-finals of the software org's ping pong tournament."),this.h()},l(P){e=p(P,"DIV",{class:!0});var E=b(e);Y(t.$$.fragment,E),a=T(E),s=p(E,"DIV",{class:!0});var V=b(s);l=p(V,"P",{class:!0});var L=b(l);o=I(L,"On Peloton's leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton's Apple Watch integration. I work with kubernetes, kafka, redis, dynamodb, postgres, argo, datadog, python, kotlin, etc. Some highlights have been:"),L.forEach(f),n=T(V),r=p(V,"UL",{class:!0});var A=b(r);d=p(A,"LI",{});var M=b(d);m=I(M,"Building and rolling out the micro-service that ingests all of Peloton's leaderboard data."),M.forEach(f),c=T(A),h=p(A,"LI",{});var R=b(h);w=I(R,"Testing, scaling, and maintaining the leaderboard for Peloton's "),_=p(R,"A",{href:!0,target:!0});var q=b(_);k=I(q,"Ride to Greatness"),q.forEach(f),z=I(R,", an annual class where cyclers compete in teams."),R.forEach(f),$=T(A),S=p(A,"LI",{});var G=b(S);j=I(G,"Making it to semi-finals of the software org's ping pong tournament."),G.forEach(f),A.forEach(f),V.forEach(f),E.forEach(f),this.h()},h(){u(l,"class","svelte-1wxrt9b"),u(_,"href","https://www.onepeloton.com/blog/ridetogreatness/"),u(_,"target","_blank"),u(r,"class","svelte-1wxrt9b"),u(s,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","engineering experienceDiv svelte-1wxrt9b")},m(P,E){H(P,e,E),B(t,e,null),i(e,a),i(e,s),i(s,l),i(l,o),i(s,n),i(s,r),i(r,d),i(d,m),i(r,c),i(r,h),i(h,w),i(h,_),i(_,k),i(h,z),i(r,$),i(r,S),i(S,j),F=!0},i(P){F||(C(t.$$.fragment,P),F=!0)},o(P){U(t.$$.fragment,P),F=!1},d(P){P&&f(e),J(t)}}}function ue(v){let e,t,a,s,l,o,n,r,d,m,c,h,w;return t=new X({props:{companyName:"Columbia Journalism School",imgUrl:"images/columbia-journalism.jpeg",positionName:"Research Scholar",timeFrame:"Jul 2022 - Aug 2022"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),s=g("div"),l=g("p"),o=y("I conducted a "),n=g("a"),r=y("data-driven investigation"),d=y(" into pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians."),m=N(),c=g("p"),h=y("I also worked on a project to study how political misinformation spreads on Twitter. I analyzed patterns in a giant Twitter dataset that I collected from the Twitter API. I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks."),this.h()},l(_){e=p(_,"DIV",{class:!0});var k=b(e);Y(t.$$.fragment,k),a=T(k),s=p(k,"DIV",{class:!0});var z=b(s);l=p(z,"P",{class:!0});var $=b(l);o=I($,"I conducted a "),n=p($,"A",{href:!0,target:!0});var S=b(n);r=I(S,"data-driven investigation"),S.forEach(f),d=I($," into pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians."),$.forEach(f),m=T(z),c=p(z,"P",{class:!0});var j=b(c);h=I(j,"I also worked on a project to study how political misinformation spreads on Twitter. I analyzed patterns in a giant Twitter dataset that I collected from the Twitter API. I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks."),j.forEach(f),z.forEach(f),k.forEach(f),this.h()},h(){u(n,"href","https://drive.google.com/file/d/1WRKum_9bb_sQHFYhV-8BvLE1P7VjFa_A/view?usp=share_link"),u(n,"target","_blank"),u(l,"class","svelte-1wxrt9b"),u(c,"class","svelte-1wxrt9b"),u(s,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","journ experienceDiv svelte-1wxrt9b")},m(_,k){H(_,e,k),B(t,e,null),i(e,a),i(e,s),i(s,l),i(l,o),i(l,n),i(n,r),i(l,d),i(s,m),i(s,c),i(c,h),w=!0},i(_){w||(C(t.$$.fragment,_),w=!0)},o(_){U(t.$$.fragment,_),w=!1},d(_){_&&f(e),J(t)}}}function fe(v){let e,t,a,s,l,o,n,r,d;return t=new X({props:{companyName:"GrassRoutes Canvassing",imgUrl:"images/grassroutes-logo.jpeg",positionName:"Co-Founder and Chief Product Officer",timeFrame:"Sept 2019 - Nov 2021"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),s=g("div"),l=g("p"),o=g("a"),n=y("GrassRoutes"),r=y(" provided local politicians with software tools to run data-driven campaigns at low cost. As the Chief Product Officer I worked with local campaigns to design intuitive and useful product features, and I implemented the frontend of the app using React. GrassRoutes was used by 5+ campaigns in 3+ states during the Novemeber 2020 election. The app was acquired in the fall of 2021."),this.h()},l(m){e=p(m,"DIV",{class:!0});var c=b(e);Y(t.$$.fragment,c),a=T(c),s=p(c,"DIV",{class:!0});var h=b(s);l=p(h,"P",{class:!0});var w=b(l);o=p(w,"A",{href:!0,target:!0});var _=b(o);n=I(_,"GrassRoutes"),_.forEach(f),r=I(w," provided local politicians with software tools to run data-driven campaigns at low cost. As the Chief Product Officer I worked with local campaigns to design intuitive and useful product features, and I implemented the frontend of the app using React. GrassRoutes was used by 5+ campaigns in 3+ states during the Novemeber 2020 election. The app was acquired in the fall of 2021."),w.forEach(f),h.forEach(f),c.forEach(f),this.h()},h(){u(o,"href","https://docs.google.com/document/d/1fnqta0BnJDkPnsSZvVqRuiFReDBcAwhaep8Y7uckXFU/edit?usp=sharing"),u(o,"target","_blank"),u(l,"class","svelte-1wxrt9b"),u(s,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","civic experienceDiv svelte-1wxrt9b")},m(m,c){H(m,e,c),B(t,e,null),i(e,a),i(e,s),i(s,l),i(l,o),i(o,n),i(l,r),d=!0},i(m){d||(C(t.$$.fragment,m),d=!0)},o(m){U(t.$$.fragment,m),d=!1},d(m){m&&f(e),J(t)}}}function he(v){let e,t,a,s,l,o,n,r,d,m,c,h,w;return t=new X({props:{companyName:"Social Science Research Council",imgUrl:"images/ssrc-logo.jpeg",timeFrame:"Jan 2021 - May 2021"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),s=g("div"),l=g("p"),o=y("I worked as a research assistant for several projects that combined qualitative and quantitative approaches to understand policy's impact on human well-being. You can read my work in "),n=g("a"),r=y("A Portrait of California 2021–2022"),d=y(" and "),m=g("a"),c=y("A Decade Undone: 2021 Update"),h=y("."),this.h()},l(_){e=p(_,"DIV",{class:!0});var k=b(e);Y(t.$$.fragment,k),a=T(k),s=p(k,"DIV",{class:!0});var z=b(s);l=p(z,"P",{class:!0});var $=b(l);o=I($,"I worked as a research assistant for several projects that combined qualitative and quantitative approaches to understand policy's impact on human well-being. You can read my work in "),n=p($,"A",{href:!0,target:!0});var S=b(n);r=I(S,"A Portrait of California 2021–2022"),S.forEach(f),d=I($," and "),m=p($,"A",{href:!0,target:!0});var j=b(m);c=I(j,"A Decade Undone: 2021 Update"),j.forEach(f),h=I($,"."),$.forEach(f),z.forEach(f),k.forEach(f),this.h()},h(){u(n,"href","https://measureofamerica.org/california2021-22/"),u(n,"target","_blank"),u(m,"href","http://measureofamerica.org/youth-disconnection-2021/"),u(m,"target","_blank"),u(l,"class","svelte-1wxrt9b"),u(s,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","journ experienceDiv svelte-1wxrt9b")},m(_,k){H(_,e,k),B(t,e,null),i(e,a),i(e,s),i(s,l),i(l,o),i(l,n),i(n,r),i(l,d),i(l,m),i(m,c),i(l,h),w=!0},i(_){w||(C(t.$$.fragment,_),w=!0)},o(_){U(t.$$.fragment,_),w=!1},d(_){_&&f(e),J(t)}}}function me(v){let e,t,a,s,l,o,n,r,d,m;return t=new X({props:{companyName:"Incite Lab at Columbia University",imgUrl:"images/incite-logo.jpeg",timeFrame:"Jan 2022 - May 2022"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),s=g("div"),l=g("p"),o=y("I built an "),n=g("a"),r=y("interactive webite"),d=y(" to visualize the methodology and results of an academic article about geographic disparities in access to mental healthcare."),this.h()},l(c){e=p(c,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=T(h),s=p(h,"DIV",{class:!0});var w=b(s);l=p(w,"P",{class:!0});var _=b(l);o=I(_,"I built an "),n=p(_,"A",{href:!0,target:!0});var k=b(n);r=I(k,"interactive webite"),k.forEach(f),d=I(_," to visualize the methodology and results of an academic article about geographic disparities in access to mental healthcare."),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){u(n,"href","https://www.danieltadmon.com/public-sociology/therapymaps/"),u(n,"target","_blank"),u(l,"class","svelte-1wxrt9b"),u(s,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","journ experienceDiv svelte-1wxrt9b")},m(c,h){H(c,e,h),B(t,e,null),i(e,a),i(e,s),i(s,l),i(l,o),i(l,n),i(n,r),i(l,d),m=!0},i(c){m||(C(t.$$.fragment,c),m=!0)},o(c){U(t.$$.fragment,c),m=!1},d(c){c&&f(e),J(t)}}}function ge(v){let e,t,a,s,l,o,n,r,d,m;return t=new X({props:{companyName:"COMS 4111 Intro to Databases",imgUrl:"images/columbia-logo.jpeg",positionName:"Teaching Assistant",timeFrame:"Sep 2021 - Dec 2021"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),s=g("div"),l=g("p"),o=y("I mentored students as they completed a project to design a database schema for an application of their choice. Together we thought through how to design schemas for applications like Facebook, or Yelp. When I was originally a student in the class, I "),n=g("a"),r=y("designed a database"),d=y(" for an application that helped multi-state residents choose which U.S. state they should vote in to maximize impact in national elections."),this.h()},l(c){e=p(c,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=T(h),s=p(h,"DIV",{class:!0});var w=b(s);l=p(w,"P",{class:!0});var _=b(l);o=I(_,"I mentored students as they completed a project to design a database schema for an application of their choice. Together we thought through how to design schemas for applications like Facebook, or Yelp. When I was originally a student in the class, I "),n=p(_,"A",{href:!0,target:!0});var k=b(n);r=I(k,"designed a database"),k.forEach(f),d=I(_," for an application that helped multi-state residents choose which U.S. state they should vote in to maximize impact in national elections."),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){u(n,"href","https://drive.google.com/file/d/1Z27ajnctm3tT4CgRvUm59ksRWx3h08-a/view?usp=share_link"),u(n,"target","_blank"),u(l,"class","svelte-1wxrt9b"),u(s,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","engineering experienceDiv svelte-1wxrt9b")},m(c,h){H(c,e,h),B(t,e,null),i(e,a),i(e,s),i(s,l),i(l,o),i(l,n),i(n,r),i(l,d),m=!0},i(c){m||(C(t.$$.fragment,c),m=!0)},o(c){U(t.$$.fragment,c),m=!1},d(c){c&&f(e),J(t)}}}function pe(v){let e,t,a,s,l,o,n,r,d,m;return t=new X({props:{companyName:"TheTake.ai",imgUrl:"images/thetake-logo.jpeg",positionName:"Software Engineering Intern",timeFrame:"Jun 2020 - Aug 2020"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),s=g("div"),l=g("p"),o=y("Have you ever wanted to buy the outfit of a TV or movie character? TheTake lets you shop shows and movies directly from your TV--their API powers "),n=g("a"),r=y("LG TV's"),d=y(` "Who What Where" feature. As an intern I built a generalized system to scrape data from clothing retailers' websites. The data I collected allowed the company to expand their database of clothes that could be matched to those in TV and movies scenes.`),this.h()},l(c){e=p(c,"DIV",{class:!0});var h=b(e);Y(t.$$.fragment,h),a=T(h),s=p(h,"DIV",{class:!0});var w=b(s);l=p(w,"P",{class:!0});var _=b(l);o=I(_,"Have you ever wanted to buy the outfit of a TV or movie character? TheTake lets you shop shows and movies directly from your TV--their API powers "),n=p(_,"A",{href:!0,target:!0});var k=b(n);r=I(k,"LG TV's"),k.forEach(f),d=I(_,` "Who What Where" feature. As an intern I built a generalized system to scrape data from clothing retailers' websites. The data I collected allowed the company to expand their database of clothes that could be matched to those in TV and movies scenes.`),_.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){u(n,"href","https://www.lg.com/us/press-release/thetake-and-lg-introduce-ai-powered-shoppable-tv-at-ces"),u(n,"target","_blank"),u(l,"class","svelte-1wxrt9b"),u(s,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","engineering experienceDiv svelte-1wxrt9b")},m(c,h){H(c,e,h),B(t,e,null),i(e,a),i(e,s),i(s,l),i(l,o),i(l,n),i(n,r),i(l,d),m=!0},i(c){m||(C(t.$$.fragment,c),m=!0)},o(c){U(t.$$.fragment,c),m=!1},d(c){c&&f(e),J(t)}}}function ve(v){let e,t,a,s,l,o,n,r,d,m,c,h,w,_,k,z;return t=new X({props:{companyName:"Columbia University Center for Nuclear Studies",imgUrl:"images/columbia-logo.jpeg",positionName:"Research Fellow",timeFrame:"May 2018 - Dec 2018"}}),{c(){e=g("div"),O(t.$$.fragment),a=N(),s=g("div"),l=g("p"),o=y("I developed an "),n=g("a"),r=y("interactive lesson plan"),d=y(` to help educators teach the geopolitical complications of nuclear proliferation. The lesson plan is used by high school teachers all across NYC, and it is taught in Columbia University's compulsory science class "Frontiers of Science."`),m=N(),c=g("p"),h=y("I also built "),w=g("a"),_=y("webpages"),k=y(" to attempt to visually convey the unconscionable scale and scope of nuclear weapons."),this.h()},l($){e=p($,"DIV",{class:!0});var S=b(e);Y(t.$$.fragment,S),a=T(S),s=p(S,"DIV",{class:!0});var j=b(s);l=p(j,"P",{class:!0});var F=b(l);o=I(F,"I developed an "),n=p(F,"A",{href:!0,target:!0});var P=b(n);r=I(P,"interactive lesson plan"),P.forEach(f),d=I(F,` to help educators teach the geopolitical complications of nuclear proliferation. The lesson plan is used by high school teachers all across NYC, and it is taught in Columbia University's compulsory science class "Frontiers of Science."`),F.forEach(f),m=T(j),c=p(j,"P",{class:!0});var E=b(c);h=I(E,"I also built "),w=p(E,"A",{href:!0,target:!0});var V=b(w);_=I(V,"webpages"),V.forEach(f),k=I(E," to attempt to visually convey the unconscionable scale and scope of nuclear weapons."),E.forEach(f),j.forEach(f),S.forEach(f),this.h()},h(){u(n,"href","https://k1project.columbia.edu/content/nuclear-diplomacy-simulation"),u(n,"target","_blank"),u(l,"class","svelte-1wxrt9b"),u(w,"href","https://k1project.columbia.edu/content/nuclear-weapons-context"),u(w,"target","_blank"),u(c,"class","svelte-1wxrt9b"),u(s,"class","descriptionContainer svelte-1wxrt9b"),u(e,"class","journ experienceDiv svelte-1wxrt9b")},m($,S){H($,e,S),B(t,e,null),i(e,a),i(e,s),i(s,l),i(l,o),i(l,n),i(n,r),i(l,d),i(s,m),i(s,c),i(c,h),i(c,w),i(w,_),i(c,k),z=!0},i($){z||(C(t.$$.fragment,$),z=!0)},o($){U(t.$$.fragment,$),z=!1},d($){$&&f(e),J(t)}}}function De(v){let e,t,a,s=v[0].includes("engineering"),l,o=v[0].includes("journ"),n,r=v[0].includes("civic"),d,m=v[0].includes("journ"),c,h=v[0].includes("journ"),w,_=v[0].includes("engineering"),k,z=v[0].includes("engineering"),$,S=v[0].includes("journ"),j,F=v[1],P=[];for(let D=0;D<F.length;D+=1)P[D]=ce(oe(v,F,D));let E=s&&de(),V=o&&ue(),L=r&&fe(),A=m&&he(),M=h&&me(),R=_&&ge(),q=z&&pe(),G=S&&ve();return{c(){e=g("div");for(let D=0;D<P.length;D+=1)P[D].c();t=N(),a=g("div"),E&&E.c(),l=N(),V&&V.c(),n=N(),L&&L.c(),d=N(),A&&A.c(),c=N(),M&&M.c(),w=N(),R&&R.c(),k=N(),q&&q.c(),$=N(),G&&G.c(),this.h()},l(D){e=p(D,"DIV",{id:!0,class:!0});var W=b(e);for(let ee=0;ee<P.length;ee+=1)P[ee].l(W);W.forEach(f),t=T(D),a=p(D,"DIV",{class:!0});var x=b(a);E&&E.l(x),l=T(x),V&&V.l(x),n=T(x),L&&L.l(x),d=T(x),A&&A.l(x),c=T(x),M&&M.l(x),w=T(x),R&&R.l(x),k=T(x),q&&q.l(x),$=T(x),G&&G.l(x),x.forEach(f),this.h()},h(){u(e,"id","toggleContainer"),u(e,"class","svelte-1wxrt9b"),u(a,"class","svelte-1wxrt9b")},m(D,W){H(D,e,W);for(let x=0;x<P.length;x+=1)P[x]&&P[x].m(e,null);H(D,t,W),H(D,a,W),E&&E.m(a,null),i(a,l),V&&V.m(a,null),i(a,n),L&&L.m(a,null),i(a,d),A&&A.m(a,null),i(a,c),M&&M.m(a,null),i(a,w),R&&R.m(a,null),i(a,k),q&&q.m(a,null),i(a,$),G&&G.m(a,null),j=!0},p(D,[W]){if(W&3){F=D[1];let x;for(x=0;x<F.length;x+=1){const ee=oe(D,F,x);P[x]?P[x].p(ee,W):(P[x]=ce(ee),P[x].c(),P[x].m(e,null))}for(;x<P.length;x+=1)P[x].d(1);P.length=F.length}W&1&&(s=D[0].includes("engineering")),s?E?W&1&&C(E,1):(E=de(),E.c(),C(E,1),E.m(a,l)):E&&(Z(),U(E,1,1,()=>{E=null}),K()),W&1&&(o=D[0].includes("journ")),o?V?W&1&&C(V,1):(V=ue(),V.c(),C(V,1),V.m(a,n)):V&&(Z(),U(V,1,1,()=>{V=null}),K()),W&1&&(r=D[0].includes("civic")),r?L?W&1&&C(L,1):(L=fe(),L.c(),C(L,1),L.m(a,d)):L&&(Z(),U(L,1,1,()=>{L=null}),K()),W&1&&(m=D[0].includes("journ")),m?A?W&1&&C(A,1):(A=he(),A.c(),C(A,1),A.m(a,c)):A&&(Z(),U(A,1,1,()=>{A=null}),K()),W&1&&(h=D[0].includes("journ")),h?M?W&1&&C(M,1):(M=me(),M.c(),C(M,1),M.m(a,w)):M&&(Z(),U(M,1,1,()=>{M=null}),K()),W&1&&(_=D[0].includes("engineering")),_?R?W&1&&C(R,1):(R=ge(),R.c(),C(R,1),R.m(a,k)):R&&(Z(),U(R,1,1,()=>{R=null}),K()),W&1&&(z=D[0].includes("engineering")),z?q?W&1&&C(q,1):(q=pe(),q.c(),C(q,1),q.m(a,$)):q&&(Z(),U(q,1,1,()=>{q=null}),K()),W&1&&(S=D[0].includes("journ")),S?G?W&1&&C(G,1):(G=ve(),G.c(),C(G,1),G.m(a,null)):G&&(Z(),U(G,1,1,()=>{G=null}),K())},i(D){j||(C(E),C(V),C(L),C(A),C(M),C(R),C(q),C(G),j=!0)},o(D){U(E),U(V),U(L),U(A),U(M),U(R),U(q),U(G),j=!1},d(D){D&&f(e),_e(P,D),D&&f(t),D&&f(a),E&&E.d(),V&&V.d(),L&&L.d(),A&&A.d(),M&&M.d(),R&&R.d(),q&&q.d(),G&&G.d()}}}function xe(v,e,t){let a=[{toggleName:"Backend Engineering",toggleCode:"engineering"},{toggleName:"Civic Tech",toggleCode:"civic"},{toggleName:"Journalism/Research",toggleCode:"journ"}],s=["engineering","civic","journ"];const l=[[]];function o(){s=we(l[0],this.__value,this.checked),t(0,s)}return[s,a,o,l]}class Pe extends te{constructor(e){super(),ae(this,e,xe,De,ie,{})}}function je(v){let e,t,a,s;return{c(){e=g("h4"),t=y("Curious to see what I look like? Click here"),this.h()},l(l){e=p(l,"H4",{class:!0});var o=b(e);t=I(o,"Curious to see what I look like? Click here"),o.forEach(f),this.h()},h(){u(e,"class","svelte-18t47ge")},m(l,o){H(l,e,o),i(e,t),a||(s=re(e,"click",v[2]),a=!0)},p:Q,i:Q,o:Q,d(l){l&&f(e),a=!1,s()}}}function Ve(v){let e,t,a,s,l,o,n,r,d,m,c;return{c(){e=g("div"),t=g("div"),a=g("img"),l=N(),o=g("h4"),n=y("Click here to close"),this.h()},l(h){e=p(h,"DIV",{class:!0});var w=b(e);t=p(w,"DIV",{class:!0});var _=b(t);a=p(_,"IMG",{src:!0,alt:!0,class:!0}),l=T(_),o=p(_,"H4",{class:!0});var k=b(o);n=I(k,"Click here to close"),k.forEach(f),_.forEach(f),w.forEach(f),this.h()},h(){le(a.src,s="images/headshot.jpg")||u(a,"src",s),u(a,"alt","headshot"),u(a,"class","svelte-18t47ge"),u(o,"class","svelte-18t47ge"),u(t,"class","content svelte-18t47ge"),u(e,"class","center svelte-18t47ge")},m(h,w){H(h,e,w),i(e,t),i(t,a),i(t,l),i(t,o),i(o,n),d=!0,m||(c=re(o,"click",v[2]),m=!0)},p(h,w){v=h},i(h){d||(ye(()=>{d&&(r||(r=ne(e,v[3],v[1],!0)),r.run(1))}),d=!0)},o(h){r||(r=ne(e,v[3],v[1],!1)),r.run(0),d=!1},d(h){h&&f(e),h&&r&&r.end(),m=!1,c()}}}function Ne(v){let e,t,a,s;const l=[Ve,je],o=[];function n(r,d){return r[0]?0:1}return t=n(v),a=o[t]=l[t](v),{c(){e=g("div"),a.c(),this.h()},l(r){e=p(r,"DIV",{id:!0,class:!0});var d=b(e);a.l(d),d.forEach(f),this.h()},h(){u(e,"id","container"),u(e,"class","svelte-18t47ge")},m(r,d){H(r,e,d),o[t].m(e,null),s=!0},p(r,[d]){let m=t;t=n(r),t===m?o[t].p(r,d):(Z(),U(o[m],1,1,()=>{o[m]=null}),K(),a=o[t],a?a.p(r,d):(a=o[t]=l[t](r),a.c()),C(a,1),a.m(e,null))},i(r){s||(C(a),s=!0)},o(r){U(a),s=!1},d(r){r&&f(e),o[t].d()}}}function Te(v,e,t){let a,s,l,o=!1;const n=()=>t(0,o=!o);function r(d,m){const{times:c=1}=m;return{...m,css(h){const w=360*c;return`transform: scale(${h}) rotate(${h*w}deg);`}}}return v.$$.update=()=>{v.$$.dirty&48&&t(1,l={duration:a,easing:s,times:2})},t(5,a=1e3),t(4,s=ke),[o,l,n,r,s,a]}class Ae extends te{constructor(e){super(),ae(this,e,Te,Ne,ie,{})}}function Ue(v){let e,t,a,s,l,o,n;return t=new $e({}),s=new Ae({}),o=new Pe({}),{c(){e=g("div"),O(t.$$.fragment),a=N(),O(s.$$.fragment),l=N(),O(o.$$.fragment),this.h()},l(r){e=p(r,"DIV",{class:!0});var d=b(e);Y(t.$$.fragment,d),a=T(d),Y(s.$$.fragment,d),l=T(d),Y(o.$$.fragment,d),d.forEach(f),this.h()},h(){u(e,"class","svelte-1jaeuos")},m(r,d){H(r,e,d),B(t,e,null),i(e,a),B(s,e,null),i(e,l),B(o,e,null),n=!0},p:Q,i(r){n||(C(t.$$.fragment,r),C(s.$$.fragment,r),C(o.$$.fragment,r),n=!0)},o(r){U(t.$$.fragment,r),U(s.$$.fragment,r),U(o.$$.fragment,r),n=!1},d(r){r&&f(e),J(t),J(s),J(o)}}}class Fe extends te{constructor(e){super(),ae(this,e,null,Ue,ie,{})}}export{Fe as default};
