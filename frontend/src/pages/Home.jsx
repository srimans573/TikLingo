import Sidebar from "../components/Sidebar";

export default function Home() {
    return (
        <div>
            <Sidebar homeButtonSelected={true} />
            <h1>Home</h1>
        </div>
    );
}
