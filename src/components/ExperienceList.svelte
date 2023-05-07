<script>
	import { get } from "svelte/store";
	import Experience from "./Experience.svelte";

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
         },
    ]
    let selectedToggles = ["engineering", "civic", "journ"]

</script>

<div id="toggleContainer">
    {#each toggleOptions as t}
        <label class="{t.toggleCode} {selectedToggles.includes(t.toggleCode) ? "selected" : ""}">
            <input type="checkbox" bind:group={selectedToggles} value={t.toggleCode}/>
            {t.toggleName}
        </label>
    {/each}
</div>

<div>
    {#if selectedToggles.includes("engineering")}
        <div class="engineering experienceDiv">
            <Experience  companyName="Peloton" imgUrl="images/peloton-logo.jpeg" positionName="Software Engineer"
                timeFrame="Aug 2022 - present" />
            <div class="descriptionContainer">
                <p>On Peloton's leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton's Apple Watch integration. I work with kubernetes, kafka, redis, dynamodb, postgres, argo, datadog, python, kotlin, etc. Some highlights have been: </p>
                <ul>
                    <li>Building and rolling out the micro-service that ingests all of Peloton's leaderboard data.</li>
                    <li>Testing, scaling, and maintaining the leaderboard for Peloton's <a href="https://www.onepeloton.com/blog/ridetogreatness/" target="_blank">Ride to Greatness</a>, an annual class where cyclers compete in teams.</li>
                    <li>Making it to semi-finals of the software org's ping pong tournament.</li>
                </ul>
            </div>
        </div>
    {/if}

    {#if selectedToggles.includes("journ")}
        <div class="journ experienceDiv">
            <Experience  companyName="Columbia Journalism School" imgUrl="images/columbia-journalism.jpeg" positionName="Research Scholar"
                timeFrame="Jul 2022 - Aug 2022" />
            <div class="descriptionContainer">
                <p>I conducted a <a href="https://drive.google.com/file/d/1WRKum_9bb_sQHFYhV-8BvLE1P7VjFa_A/view?usp=share_link" target="_blank">data-driven investigation</a> into pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians.</p>
                <p>I also worked on a project to study how political misinformation spreads on Twitter. I analyzed patterns in a giant Twitter dataset that I collected from the Twitter API. I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks.</p>
            </div>
        </div>
    {/if}

    {#if selectedToggles.includes("civic")}
        <div class="civic experienceDiv">
            <Experience  companyName="GrassRoutes Canvassing" imgUrl="images/grassroutes-logo.jpeg" positionName="Co-Founder and Chief Product Officer"
                timeFrame="Sept 2019 - Nov 2021" />
            <div class="descriptionContainer">
              <p><a href="https://docs.google.com/document/d/1fnqta0BnJDkPnsSZvVqRuiFReDBcAwhaep8Y7uckXFU/edit?usp=sharing" target="_blank">GrassRoutes</a> provided local politicians with software tools to run data-driven campaigns at low cost. As the Chief Product Officer I worked with local campaigns to design intuitive and useful product features, and I implemented the frontend of the app using React. GrassRoutes was used by 5+ campaigns in 3+ states during the Novemeber 2020 election. The app was acquired in the fall of 2021.</p>
            </div>
        </div>
    {/if}

    {#if selectedToggles.includes("journ")}
        <div class="journ experienceDiv">
            <Experience  companyName="Social Science Research Council" imgUrl="images/ssrc-logo.jpeg"
                timeFrame="Jan 2021 - May 2021" />
            <div class="descriptionContainer">
                <p>I worked as a research assistant for several projects that combined qualitative and quantitative approaches to understand policy's impact on human well-being. You can read my work in <a href="https://measureofamerica.org/california2021-22/" target="_blank">A Portrait of California 2021–2022</a> and <a href="http://measureofamerica.org/youth-disconnection-2021/" target="_blank">A Decade Undone: 2021 Update</a>.</p>
            </div>
        </div>
    {/if}

    {#if selectedToggles.includes("journ")}
        <div class="journ experienceDiv">
            <Experience  companyName="Incite Lab at Columbia University" imgUrl="images/incite-logo.jpeg" timeFrame="Jan 2022 - May 2022" />
            <div class="descriptionContainer">
                <p>I built an <a href="https://www.therapymaps.us/" target="_blank">interactive webite</a> to visualize the methodology and results of an academic article about geographic disparities in access to mental healthcare.</p>
            </div>
        </div>
    {/if}

    {#if selectedToggles.includes("engineering")}
        <div class="engineering experienceDiv">
            <Experience  companyName="COMS 4111 Intro to Databases" imgUrl="images/columbia-logo.jpeg" positionName="Teaching Assistant" timeFrame="Sep 2021 - Dec 2021" />
            <div class="descriptionContainer">
                <p>I mentored students as they completed a project to design a database schema for an application of their choice. Together we thought through how to design schemas for applications like Facebook, or Yelp. When I was originally a student in the class, I <a href="https://drive.google.com/file/d/1Z27ajnctm3tT4CgRvUm59ksRWx3h08-a/view?usp=share_link" target="_blank">designed a database</a> for an application that helped multi-state residents choose which U.S. state they should vote in to maximize impact in national elections.</p>
            </div>
        </div>
    {/if}

    {#if selectedToggles.includes("engineering")}
        <div class="engineering experienceDiv">
            <Experience  companyName="TheTake.ai" imgUrl="images/thetake-logo.jpeg" positionName="Software Engineering Intern" timeFrame="Jun 2020 - Aug 2020" />
            <div class="descriptionContainer">
                <p>Have you ever wanted to buy the outfit of a TV or movie character? TheTake lets you shop shows and movies directly from your TV--their API powers <a href="https://www.lg.com/us/press-release/thetake-and-lg-introduce-ai-powered-shoppable-tv-at-ces" target="_blank">LG TV's</a> "Who What Where" feature. As an intern I built a generalized system to scrape data from clothing retailers' websites. The data I collected allowed the company to expand their database of clothes that could be matched to those in TV and movies scenes.</p>
            </div>
            
        </div>
    {/if}

    {#if selectedToggles.includes("journ")}
        <div class="journ experienceDiv">
            <Experience  companyName="Columbia University Center for Nuclear Studies" imgUrl="images/columbia-logo.jpeg" positionName="Research Fellow" timeFrame="May 2018 - Dec 2018" />
            <div class="descriptionContainer">
                <p>I developed an <a href="https://k1project.columbia.edu/content/nuclear-diplomacy-simulation" target="_blank">interactive lesson plan</a> to help educators teach the geopolitical complications of nuclear proliferation. The lesson plan is used by high school teachers all across NYC, and it is taught in Columbia University's compulsory science class "Frontiers of Science."</p>
                <p>I also built <a href="https://k1project.columbia.edu/content/nuclear-weapons-context" target="_blank">webpages</a> to attempt to visually convey the unconscionable scale and scope of nuclear weapons.</p>
            </div>
        </div>
    {/if}

</div>


<style>
    /* Experience toggle buttons */
    #toggleContainer {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    input[type="checkbox"] {
        /* display: none; */
    }
    label {
        background-color: white;
        color: black;
        border-radius: 12px;
        font-size: 16px;
        padding: 5px;
    }
    label:hover {
        cursor: pointer;
    }

    .engineering {
        border: 4px solid #E98973;
    }
    label.engineering:hover {
        background-color: #E98973;
    }
    label.engineering.selected {
        background-color: #E98973;
    }

    .civic {
        border: 4px solid #E7D4C0;
    }
    label.civic:hover {
        background-color: #E7D4C0;
    }
    label.civic.selected {
        background-color: #E7D4C0;
    }

    .journ {
        border: 4px solid #88B2CC;
    }
    label.journ:hover {
        background-color: #88B2CC;
    }
    label.journ.selected {
        background-color: #88B2CC;
    }

    .misc {
        border: 4px solid #658EA9;
    }
    label.misc:hover {
        background-color: #658EA9;
    }
    label.misc.selected {
        background-color: #658EA9;
    }

    /* Experience grid */
    .experienceDiv {
        width: 100%;
        padding: 10px;
        padding-bottom: 16px;
        margin-top: 0;
        margin-bottom: 30px;
        width: 360px;
        /* height: 100% */
    }

    .experienceDivContainer {
        margin-top: 0;
        margin-bottom: 30px;
        
        
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 800px;
        margin: auto;
    }

    .descriptionContainer {
        text-align: left;
        margin: 0;
    }

    p {
        margin-bottom: 0;
    }

    ul {
        margin-top: 16px;
        margin-bottom: 0;
        padding-left: 20px;
    }
</style>