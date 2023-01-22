import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './jsonData';
import Card from 'react-bootstrap/Card';

function Agent() {
//** nombre total des agents sans l’agent avec l’id 000 */
    const totalAgents = jsonData.results;
    const total = totalAgents.length;
//** nombre total des agents actives sans l’agent avec l’id 000 */
    const activeAgents = jsonData.results.filter(agent => agent.status === "active");
    const active = activeAgents.length;
//** nombre total des agents déconnectés sans l’agent avec l’id 000 */
    const NeverConnectedAgent = jsonData.results.filter(agent => agent.status === "never_connected");
    const NeverConnected = NeverConnectedAgent.length;
//** nombre total des agents en attente sans l’agent avec l’id 000 */
    const PendingAgent = jsonData.results.filter(agent => agent.status === "pending");
    const Pending = PendingAgent.length;
//** nombre total des agents agents jamais connectés sans l’agent avec l’id 000 */
    const DisconnectedAgent = jsonData.results.filter(agent => agent.status === "disconnected");
    const Disconnected = DisconnectedAgent.length;
    return (
    <div className="allCards">
{/*** Card pour Total Agents ****/}
        <div className='card'>
                <Card.Body>
                    <Card.Title className='cardTitle'>Total agents</Card.Title>
                    <Card.Text className='totalAgent'>{total}</Card.Text>
                </Card.Body>
        </div>
{/*** Card pour Active Agents ****/}
        <div className='card'>
                <Card.Body>
                    <Card.Title className='cardTitle'>Active agents</Card.Title>
                    <Card.Text className='activeAgent'>{active}</Card.Text>
                </Card.Body>
        </div>
{/*** Card pour Disconnected Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle'>Disconnected agents</Card.Title>
                <Card.Text className='disconnectedAgent'>{Disconnected}</Card.Text>
            </Card.Body>
        </div>
{/*** Card pour Pending Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle' >Pending agents</Card.Title>
                <Card.Text className='pendingAgent'>{Pending}</Card.Text>
            </Card.Body>
        </div>
{/*** Card pour Never connected Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle'>Never connected agents</Card.Title>
                <Card.Text className='neverConnected'>{NeverConnected}</Card.Text>
            </Card.Body>
        </div>
    </div>
);
}
export default Agent;
