import Image from "next/image";
import { useState } from "react";

export default function loginPage() {
    return (
        <div>
            <main>
                <form>
                    <label htmlFor="userName">Email</label>
                    <input
                        type="text"
                        id="userName"
                        className="text-input input-large"
                        name="userName"
                        placeholder="Username"
                        required
                        />
                </form>
            </main>
        </div>
    );
}