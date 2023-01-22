import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './jsonData';
import Card from 'react-bootstrap/Card';

function Agent() {
//** nombre total des agents sans l’agent avec l’id 000 */
    const totalAgents = jsonData.results.filter(agent => agent.id !== '000');
    const total = totalAgents.length;
//** nombre total des agents actives sans l’agent avec l’id 000 */
    const activeAgents = jsonData.results.filter(agent => agent.status === "active"&& agent.id !== "000");
    const active = activeAgents.length;
//** nombre total des agents déconnectés sans l’agent avec l’id 000 */
    const NeverConnectedAgent = jsonData.results.filter(agent => agent.status === "never_connected"&& agent.id !== "000");
    const NeverConnected = NeverConnectedAgent.length;
//** nombre total des agents en attente sans l’agent avec l’id 000 */
    const PendingAgent = jsonData.results.filter(agent => agent.status === "pending"&& agent.id !== "000");
    const Pending = PendingAgent.length;
//** nombre total des agents agents jamais connectés sans l’agent avec l’id 000 */
    const DisconnectedAgent = jsonData.results.filter(agent => agent.status === "disconnected"&& agent.id !== "000");
    const Disconnected = DisconnectedAgent.length;
    return (
    <div className="allCards">
{/*** Card pour Total Agents ****/}
        <div className='card'>
                <Card.Body>
                    <Card.Title className='cardTitle'>Total Agents</Card.Title>
                    <Card.Text className='totalAgent'>{total}</Card.Text>
                </Card.Body>
        </div>
{/*** Card pour Active Agents ****/}
        <div className='card'>
                <Card.Body>
                    <Card.Title className='cardTitle'>Active Agents</Card.Title>
                    <Card.Text className='activeAgent'>{active}</Card.Text>
                </Card.Body>
        </div>
{/*** Card pour Disconnected Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle'>Disconnected Agents</Card.Title>
                <Card.Text className='disconnectedAgent'>{Disconnected}</Card.Text>
            </Card.Body>
        </div>
{/*** Card pour Pending Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle' >Pending Agents</Card.Title>
                <Card.Text className='pendingAgent'>{Pending}</Card.Text>
            </Card.Body>
        </div>
{/*** Card pour Never connected Agents ****/}
        <div className='card'>
            <Card.Body>
                <Card.Title className='cardTitle'>Never connected Agents</Card.Title>
                <Card.Text className='neverConnected'>{NeverConnected}</Card.Text>
            </Card.Body>
        </div>
    </div>
);
}
export default Agent;