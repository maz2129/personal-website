import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../chunks/index.js";
const Intro_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "p.svelte-1hjseqx{margin:auto;width:500px}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<h2>Matt Zinman</h2>
<p class="svelte-1hjseqx">Hi 👋. I&#39;m interested in distributed systems, data journalism, and civic technology. Currently I work as a software engineer at Peloton where I build, design, and maintain the backend of the in-class leaderboard. You can reach me on <a target="_blank" href="https://www.linkedin.com/in/matt-zinman-480315153/">LinkedIn</a> or by email at mattalexzin@gmail.com.</p>`;
});
const Experience_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#experienceContainer.svelte-1mg7az6{text-align:left;display:flex;flex-wrap:wrap;width:100%}#companyNameColumn.svelte-1mg7az6{width:80%}p.svelte-1mg7az6{margin:1px\n    }#companyLogoColumn.svelte-1mg7az6{width:20%}#imageContainer.svelte-1mg7az6{height:50px;width:50px;float:right}img.svelte-1mg7az6{max-width:100%;height:auto}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { companyName = "" } = $$props;
  let { imgUrl = "" } = $$props;
  let { positionName = "" } = $$props;
  let { timeFrame = "" } = $$props;
  if ($$props.companyName === void 0 && $$bindings.companyName && companyName !== void 0)
    $$bindings.companyName(companyName);
  if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
    $$bindings.imgUrl(imgUrl);
  if ($$props.positionName === void 0 && $$bindings.positionName && positionName !== void 0)
    $$bindings.positionName(positionName);
  if ($$props.timeFrame === void 0 && $$bindings.timeFrame && timeFrame !== void 0)
    $$bindings.timeFrame(timeFrame);
  $$result.css.add(css$3);
  return `<div id="experienceContainer" class="svelte-1mg7az6"><div id="companyNameColumn" class="svelte-1mg7az6"><div id="companyNameContainer"><p class="svelte-1mg7az6"><strong>${escape(companyName)}</strong></p>
            <p class="svelte-1mg7az6">${escape(positionName)}</p>
            <p id="timeframe" class="svelte-1mg7az6"><em>${escape(timeFrame)}</em></p></div></div>
    <div id="companyLogoColumn" class="svelte-1mg7az6"><div id="imageContainer" class="svelte-1mg7az6"><img${add_attribute("src", imgUrl, 0)} class="svelte-1mg7az6"></div></div>
</div>`;
});
const ExperienceList_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '#toggleContainer.svelte-60xuv7{margin-top:30px;margin-bottom:30px}input[type="checkbox"].svelte-60xuv7{display:none}label.svelte-60xuv7{background-color:white;color:black;border-radius:12px;font-size:16px;padding:5px}label.svelte-60xuv7:hover{cursor:pointer}.engineering.svelte-60xuv7{border:4px solid #E98973}label.engineering.svelte-60xuv7:hover{background-color:#E98973}label.engineering.selected.svelte-60xuv7{background-color:#E98973}.civic.svelte-60xuv7{border:4px solid #E7D4C0}label.civic.svelte-60xuv7:hover{background-color:#E7D4C0}label.civic.selected.svelte-60xuv7{background-color:#E7D4C0}.journ.svelte-60xuv7{border:4px solid #88B2CC}label.journ.svelte-60xuv7:hover{background-color:#88B2CC}label.journ.selected.svelte-60xuv7{background-color:#88B2CC}.misc.svelte-60xuv7{border:4px solid #658EA9}label.misc.svelte-60xuv7:hover{background-color:#658EA9}label.misc.selected.svelte-60xuv7{background-color:#658EA9}.experienceDiv.svelte-60xuv7{width:100%;padding:10px;padding-bottom:16px;margin-top:0;margin-bottom:30px;width:360px}.experienceDivContainer.svelte-60xuv7{margin-top:0;margin-bottom:30px}div.svelte-60xuv7{display:flex;flex-wrap:wrap;justify-content:space-around;width:800px;margin:auto}.descriptionContainer.svelte-60xuv7{text-align:left;margin:0}p.svelte-60xuv7{margin-bottom:0}ul.svelte-60xuv7{margin-top:16px;margin-bottom:0;padding-left:20px}',
  map: null
};
const ExperienceList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toggleOptions = [
    {
      toggleName: "Backend Engineering",
      toggleCode: "engineering"
    },
    {
      toggleName: "Civic Tech",
      toggleCode: "civic"
    },
    {
      toggleName: "Journalism/Research",
      toggleCode: "journ"
    }
  ];
  let selectedToggles = [];
  $$result.css.add(css$2);
  return `<div id="toggleContainer" class="svelte-60xuv7">${each(toggleOptions, (t) => {
    return `<label class="${escape(t.toggleCode, true) + " " + escape(selectedToggles.includes(t.toggleCode) ? "selected" : "", true) + " svelte-60xuv7"}"><input type="checkbox"${add_attribute("value", t.toggleCode, 0)} class="svelte-60xuv7"${~selectedToggles.indexOf(t.toggleCode) ? add_attribute("checked", true, 1) : ""}>
            ${escape(t.toggleName)}
        </label>`;
  })}</div>

<div class="svelte-60xuv7">${selectedToggles.length == 0 || selectedToggles.includes("engineering") ? `<div class="engineering experienceDiv svelte-60xuv7">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      companyName: "Peloton",
      imgUrl: "images/peloton-logo.jpeg",
      positionName: "Software Engineer",
      timeFrame: "Aug 2022 - present"
    },
    {},
    {}
  )}
            <div class="descriptionContainer svelte-60xuv7"><p class="svelte-60xuv7">On Peloton&#39;s leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton&#39;s Apple Watch integration. I work with kubernetes, Kafka, Argo, datadog, python, and kotlin. Some of my career highlights include: </p>
                <ul class="svelte-60xuv7"><li>Building and rolling out the micro-service that receives all of Peloton&#39;s leaderboard data.</li>
                    <li>Testing, scaling, and maintaining the leaderboard for Peloton&#39;s <a href="https://www.onepeloton.com/blog/ridetogreatness/" target="_blank">Ride to Greatness</a>, an annual class where cyclers compete in teams.</li>
                    <li>Making it to semi-finals of the software org&#39;s ping pong tournament.</li></ul></div></div>` : ``}

    ${selectedToggles.length == 0 || selectedToggles.includes("journ") ? `<div class="journ experienceDiv svelte-60xuv7">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      companyName: "Columbia Journalism School",
      imgUrl: "images/columbia-journalism.jpeg",
      positionName: "Research Scholar",
      timeFrame: "Jul 2022 - Aug 2022"
    },
    {},
    {}
  )}
            <div class="descriptionContainer svelte-60xuv7"><p class="svelte-60xuv7">I conducted a <a href="https://drive.google.com/file/d/1WRKum_9bb_sQHFYhV-8BvLE1P7VjFa_A/view?usp=share_link" target="_blank">data-driven investigation</a> into pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians.</p>
                <p class="svelte-60xuv7">I also worked on a project to collect and analyze Twitter data: I made cron jobs to regularly pull data from the Twitter API and to store it in a graph database. Then I wrote jupyter notebooks describing patterns in the giant social graph I had collected and I shared them with teams of journalists. In my notebooks I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks.</p></div></div>` : ``}

    ${selectedToggles.length == 0 || selectedToggles.includes("civic") ? `<div class="civic experienceDiv svelte-60xuv7">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      companyName: "GrassRoutes Canvassing",
      imgUrl: "images/grassroutes-logo.jpeg",
      positionName: "Co-Founder and Chief Product Officer",
      timeFrame: "Sept 2019 - Nov 2021"
    },
    {},
    {}
  )}
            <div class="descriptionContainer svelte-60xuv7"><p class="svelte-60xuv7"><a href="https://docs.google.com/document/d/1fnqta0BnJDkPnsSZvVqRuiFReDBcAwhaep8Y7uckXFU/edit?usp=sharing" target="_blank">GrassRoutes</a> provided local politicians with software tools to run data-driven campaigns at low cost. As the Chief Product Officer I worked with local campaigns to design intuitive and useful product features, and I implemented the frontend of the app using React. GrassRoutes was used by 5+ campaigns in 3+ states during the Novemeber 2020 election. The app was acquired in the fall of 2021.</p></div></div>` : ``}

    ${selectedToggles.length == 0 || selectedToggles.includes("journ") ? `<div class="journ experienceDiv svelte-60xuv7">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      companyName: "Social Science Research Council",
      imgUrl: "images/ssrc-logo.jpeg",
      timeFrame: "Jan 2021 - May 2021"
    },
    {},
    {}
  )}
            <div class="descriptionContainer svelte-60xuv7"><p class="svelte-60xuv7">I worked as a research assistant for several projects that combined qualitative and quantitative approaches to understand policy&#39;s impact on human well-being. You can read my work in <a href="https://measureofamerica.org/california2021-22/" target="_blank">A Portrait of California 2021–2022</a> and <a href="http://measureofamerica.org/youth-disconnection-2021/" target="_blank">A Decade Undone: 2021 Update</a>.</p></div></div>` : ``}

    ${selectedToggles.length == 0 || selectedToggles.includes("journ") ? `<div class="journ experienceDiv svelte-60xuv7">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      companyName: "Incite Lab at Columbia University",
      imgUrl: "images/incite-logo.jpeg",
      timeFrame: "Jan 2022 - May 2022"
    },
    {},
    {}
  )}
            <div class="descriptionContainer svelte-60xuv7"><p class="svelte-60xuv7">I built an <a href="https://www.danieltadmon.com/public-sociology/therapymaps/" target="_blank">interactive webite</a> to visually convey the methodology and results of an academic article about geographic disparities in access to mental healthcare.</p></div></div>` : ``}

    ${selectedToggles.length == 0 || selectedToggles.includes("engineering") ? `<div class="engineering experienceDiv svelte-60xuv7">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      companyName: "COMS 4111 Intro to Databases",
      imgUrl: "images/columbia-logo.jpeg",
      positionName: "Teaching Assistant",
      timeFrame: "Sep 2021 - Dec 2021"
    },
    {},
    {}
  )}
            <div class="descriptionContainer svelte-60xuv7"><p class="svelte-60xuv7">I mentored students as they completed a project to design a database schema for an application of their choice. This required me to consider the database design of many varied projects: how would I design Facebook&#39;s database? Or Yelp&#39;s? When I was originally a student in the class, I <a href="https://drive.google.com/file/d/1Z27ajnctm3tT4CgRvUm59ksRWx3h08-a/view?usp=share_link" target="_blank">designed a database</a> for an application that helped multi-state residents strategically decide which U.S. state they should vote in for national elections.</p></div></div>` : ``}

    ${selectedToggles.length == 0 || selectedToggles.includes("engineering") ? `<div class="engineering experienceDiv svelte-60xuv7">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      companyName: "TheTake.ai",
      imgUrl: "images/thetake-logo.jpeg",
      positionName: "Software Engineering Intern",
      timeFrame: "Jun 2020 - Aug 2020"
    },
    {},
    {}
  )}
            <div class="descriptionContainer svelte-60xuv7"><p class="svelte-60xuv7">Have you ever wanted to buy the outfit of a TV or movie character? TheTake lets you shop shows and movies directly from your TV--their API powers <a href="https://www.lg.com/us/press-release/thetake-and-lg-introduce-ai-powered-shoppable-tv-at-ces" target="_blank">LG TV&#39;s</a> &quot;Who What Where&quot; feature. As an intern I built a generalized system to scrape data from clothing retailers&#39; websites. The data I collected allowed the company to expand their database of clothes that could be matched to those in TV and movies scenes.</p></div></div>` : ``}

    ${selectedToggles.length == 0 || selectedToggles.includes("journ") ? `<div class="journ experienceDiv svelte-60xuv7">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      companyName: "Columbia University Center for Nuclear Studies",
      imgUrl: "images/columbia-logo.jpeg",
      positionName: "Research Fellow",
      timeFrame: "May 2018 - Dec 2018"
    },
    {},
    {}
  )}
            <div class="descriptionContainer svelte-60xuv7"><p class="svelte-60xuv7">I developed an <a href="https://k1project.columbia.edu/content/nuclear-diplomacy-simulation" target="_blank">interactive lesson plan</a> to help educators teach the geopolitical complications of nuclear proliferation. The lesson plan is used by high school teachers all across NYC, and it is taught in Columbia University&#39;s compulsory science class &quot;Frontiers of Science.&quot;</p>
                <p class="svelte-60xuv7">I also built <a href="https://k1project.columbia.edu/content/nuclear-weapons-context" target="_blank">webpages</a> to attempt to visually convey the unconscionable scale and scope of nuclear weapons.</p></div></div>` : ``}

</div>`;
});
const Headshot_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#container.svelte-18t47ge{height:30px}.center.svelte-18t47ge{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.content.svelte-18t47ge{position:absolute;transform:translate(-50%, -50%);width:300px;background-color:white;border:2px black;border-style:solid;z-index:100}img.svelte-18t47ge{width:100%}h4.svelte-18t47ge{text-decoration:underline;font-weight:normal;color:#383838;cursor:pointer;margin-top:20px}",
  map: null
};
const Headshot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="container" class="svelte-18t47ge">${`<h4 class="svelte-18t47ge">Curious to see what I look like? Click here</h4>`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-kpn7pf{text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-kpn7pf">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}
	${validate_component(Headshot, "Headshot").$$render($$result, {}, {}, {})}
    ${validate_component(ExperienceList, "ExperienceList").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
