import Sidebar from '../components/Sidebar';

export default function Profile() {
    return (
        <div>
            <Sidebar profileButtonSelected={true} />
            <h1>Profile</h1>
        </div>
    );
}
