import type { User } from "./types.js";

const form = document.querySelector<HTMLFormElement>('userForm');
const nameInput = document.querySelector<HTMLInputElement>('name');
const emailInput = document.querySelector<HTMLInputElement>('email');
const ageInput = document.querySelector<HTMLInputElement>('age');
const messageBox = document.querySelector<HTMLParagraphElement>('#message');

function validateForm(name: string, email: string, age: number): boolean {
    if (!name || !email || Number.isNaN(age)) {
        return false;
    }
    return true;
}

//  this is type inference
const API_URL = 'http://localhost:5000/submit-form';

async function submitData(data: User) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        
        }
        return await response.json();
    }
    catch (err) {
        console.error('Failed to submit User:', err);
        return null;
    }
}

form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameInput?.value.trim() ?? "";
    const email = emailInput?.value.trim() ?? "";
    const age = Number(ageInput?.value);

    if (!validateForm(name, email, age)) {
        if (messageBox) {
            messageBox.textContent = "Please enter valid information.";
        }
        return;
    }

    const userDetails: User = {
        name,
        email,
        age
    }

    const result = await submitData( userDetails)
    if (messageBox) {
        messageBox.textContent = result.message;
    }
});
