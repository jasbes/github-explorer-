import { RepositoryItem } from './RepositoryItem';

const repositories = [
    {
        name: "unform1",
        destination: "Forms in React",
        link: "https://github.com/unform/unform"
    },

    {
        name: "unform2",
        destination: "Forms in React",
        link: "https://github.com/unform/unform"
    },

    {
        name: "unform3",
        destination: "Forms in React",
        link: "https://github.com/unform/unform"
    }
];

export function RepositoryList(props) {

    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
                {repositories.map(repo => <RepositoryItem repository={repo} />)}
            </ul>
        </section>
    );
}