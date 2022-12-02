import { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';  
import {Card} from 'react-bootstrap';  

const Landing = () => {
    const [deliveryId, setDeliveryId] = useState("");
    const [offerId, setOfferId] = useState("");

    const handleDeliverySubmit = async (event) => {
        event.preventDefault();

        const url = "https://api.catalyst-wt.com/workflow/api/v1/workflows/285b6c8d-97ba-43c1-18c9-08dad3aab826/trigger?sig=227a459c-e922-4695-97a6-ba22aeeafca2";
        const config = {
            headers: {
                TenantId: "5d28abf8-b549-4535-9ccd-51f0f0fd2369",
            }
          }

        const data = {
            "id" : deliveryId,
            "type" : "deliveries"
        }

        const res = await axios.post(url, data, config)
        if (res.status === 200) {
            alert("Translation service was triggered")
        } else {
            alert("ISSUE!! Couldn't trigger translation service")
        }
    }

    const handleOfferSubmit = async (event) => {
        event.preventDefault();

        const url = "https://api.catalyst-wt.com/workflow/api/v1/workflows/285b6c8d-97ba-43c1-18c9-08dad3aab826/trigger?sig=227a459c-e922-4695-97a6-ba22aeeafca2";
        const config = {
            headers: {
                TenantId: "5d28abf8-b549-4535-9ccd-51f0f0fd2369",
            }
          }

        const data = {
            "id" : offerId,
            "type" : "offers"
        }

        const res = await axios.post(url, data, config)
        if (res.status === 200) {
            alert("Translation service was triggered")
        } else {
            alert("ISSUE!! Couldn't trigger translation service")
        }
    }

    return (
        <div>
            <Card>  
                <Card.Body>  
                    <Card.Title>OTD ID for Delivery Translation</Card.Title>  
                    <form  onSubmit={handleDeliverySubmit}>
                            <input
                            type="text" 
                            value={deliveryId}
                            onChange={(e) => setDeliveryId(e.target.value)}
                            />
                        <input type="submit" />
                    </form>
                </Card.Body>  
            </Card> 
            <Card> 
                <Card.Body>  
                    <Card.Title>OTD ID for Offer Translation:</Card.Title>  
                    <form onSubmit={handleOfferSubmit}>
                            <input
                            type="text" 
                            value={offerId}
                            onChange={(e) => setOfferId(e.target.value)}
                            />
                        <input type="submit" />
                    </form>
                </Card.Body>  
            </Card> 
        </div>
    )
}

export default Landing