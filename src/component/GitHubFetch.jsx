
import { useEffect, useState } from "react"
import "../css/GitHubFetch.css"
function GitHubFetch() {

    const [api, setApi] = useState("");
    const [commit, setCommit] = useState("");

    useEffect(() => {
        const repoUrl = "https://api.github.com/repos/Luft-phon/react-portfolio";
        const contributorsUrl = "https://api.github.com/repos/Luft-phon/react-portfolio/stats/contributors";

        Promise.all([
            fetch(repoUrl).then(res => {
                if (!res.ok) throw new Error("Repo fetch failed");
                return res.json();
            }),
            fetch(contributorsUrl).then(res => {
                if (!res.ok) throw new Error("Contributors fetch failed");
                return res.json();
            })
        ])
            .then(([repoData, contributors]) => {
                setApi(repoData);

                // calculate total commits across all contributors
                const totalCommits = contributors.reduce((sum, c) => sum + c.total, 0);
                setCommit(totalCommits);
            })
            .catch(err => console.error("GitHub fetch error:", err));
    }, []);


    return (
        <div className="github-content">
            <div className="repo">Repo: {api.name} • </div>
            <div className="author">Author: {api?.owner?.login} • </div>
            <div className="comit">Total Commits:  {commit} • </div>
            <div className="last-push">Last pushed: {api.pushed_at}</div>
        </div>
    )
}

export default GitHubFetch