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
    let selectedToggles = []

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
    {#if selectedToggles.length == 0 || selectedToggles.includes("engineering")}
        <div class="engineering experienceDiv">
            <Experience  companyName="Peloton" imgUrl="images/peloton-logo.jpeg" positionName="Software Engineer"
                timeFrame="Aug 2022 - present" />
            <div class="descriptionContainer">
                <p>On Peloton's leaderboard team I work with services that receive more than 2 billion requests per day. Currently I am re-architecting our backend to make our services more resilient to surges in traffic at the beginning of large fitness classes and I am improving the scalability of Peloton's Apple Watch integration. I work with kubernetes, Kafka, Argo, datadog, python, and kotlin. Some career highlights include: </p>
                <ul>
                    <li>Building and rolling out the micro-service that receives all of Peloton's leaderboard data.</li>
                    <li>Testing, scaling, and maintaining the leaderboard for Peloton's <a href="https://www.onepeloton.com/blog/ridetogreatness/" target="_blank">Ride to Greatness</a>, an annual class where cyclers compete against each other in teams.</li>
                    <li>Making it to semi-finals of the software org's ping pong tournament.</li>
                </ul>
            </div>
        </div>
    {/if}

    {#if selectedToggles.length == 0 || selectedToggles.includes("journ")}
        <div class="journ experienceDiv">
            <Experience  companyName="Columbia Journalism School" imgUrl="images/columbia-journalism.jpeg" positionName="Research Scholar"
                timeFrame="Jul 2022 - Aug 2022" />
            <div class="descriptionContainer">
                <p>I conducted a <a href="https://docs.google.com/presentation/d/1UKCU5uEox6_HDSsYcPAkeE-tX55S3_gkuROW4v4ZugI/edit#slide=id.p" target="_blank">data-driven investigation</a> of pedestrian safety in Mimai-Dade County, finding that Miami-Dade’s most disadvantaged zip codes are also some of its most deadly for pedestrians.</p>
                <p>I also worked on a project to collect and analyze Twitter data: I made cron jobs to regularly pull data from the Twitter API and to store it in a graph database. I then wrote jupyter notebooks describing patterns in the giant social graph I had collected and shared them with teams of journalists. In my notebooks I experimented with nlp algorithms to classify tweets, graph algorithms to identify clusters of users, and creative ways of visualizing social networks.</p>
            </div>
        </div>
    {/if}

    {#if selectedToggles.length == 0 || selectedToggles.includes("civic")}
        <div class="civic experienceDiv">
            <Experience  companyName="GrassRoutes Canvassing" imgUrl="images/grassroutes-logo.jpeg" positionName="Co-Founder and Chief Product Officer"
                timeFrame="Sept 2019 - Nov 2021" />
            <div class="descriptionContainer">
                <p>I worked with local </p>
            </div>
        </div>
    {/if}

    {#if selectedToggles.length == 0 || selectedToggles.includes("journ")}
        <div class="journ experienceDiv">
            <Experience  companyName="Social Science Research Council" imgUrl="images/ssrc-logo.jpeg"
                timeFrame="Jan 2021 - May 2021" />
        </div>
    {/if}

    {#if selectedToggles.length == 0 || selectedToggles.includes("journ")}
        <div class="journ experienceDiv">
            <Experience  companyName="Incite Lab at Columbia University" imgUrl="images/incite-logo.jpeg"
                timeFrame="Jan 2022 - May 2022" />
        </div>
    {/if}

    {#if selectedToggles.length == 0 || selectedToggles.includes("engineering")}
        <div class="engineering experienceDiv">
            <Experience  companyName="COMS 4111 Intro to Databases" imgUrl="images/columbia-logo.jpeg" positionName="Teaching Assistant"
                timeFrame="Sep 2021 - Dec 2021" />
        </div>
    {/if}

    {#if selectedToggles.length == 0 || selectedToggles.includes("engineering")}
        <div class="engineering experienceDiv">
            <Experience  companyName="TheTake.ai" imgUrl="images/thetake-logo.jpeg" positionName="Software Engineering Intern"
                timeFrame="Jun 2022 - Aug 2022" />
        </div>
    {/if}

    {#if selectedToggles.length == 0 || selectedToggles.includes("journ")}
        <div class="journ experienceDiv">
            <Experience  companyName="Columbia University Center for Nuclear Studies" imgUrl="images/columbia-logo.jpeg" positionName="Research Fellow"
                timeFrame="May 2018 - Dec 2018" />
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
        display: none;
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
        width: 360px;
        margin-top: 0;
        margin-bottom: 30px;
        padding: 10px;
        padding-bottom: 16px;
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