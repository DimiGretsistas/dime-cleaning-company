export default function Contact() {
    return <section id="ContactUs" className="contact--section ">
        <div>
            <h2>Contact Us</h2>
            <p className="text-lg">
                Please leave us a message with your inquiry
            </p>
        </div>
        <form className="contact--form--container">
            <div className="container">
                <label htmlFor="first-name" className="contact--label">
                    <span className="text-md"> First Name </span>
                    <input
                        type="text"
                        className="contact--input text-md"
                        name="first-name"
                        id="first-name"
                        required
                    />
                </label>
                <label htmlFor="last-name" className="contact--label">
                    <span className="text-md"> Last Name </span>
                    <input
                        type="text"
                        className="contact--input text-md"
                        name="last-name"
                        id="last-name"
                        required
                    />
                </label>
                <label htmlFor="email" className="contact--label">
                    <span className="text-md"> Email </span>
                    <input
                        type="email"
                        className="contact--input text-md"
                        name="email"
                        id="email"
                        required
                    />
                </label>
                <label htmlFor="phone-number" className="contact--label">
                    <span className="text-md"> Phone Number </span>
                    <input
                        type="number"
                        className="contact--input text-md"
                        name="phone-number"
                        id="phone-number"
                    />
                </label>
            </div>
            <label htmlFor="choose-service" className="contact--label">
                <span className="text-md">Type of cleaning</span>
                <select id="choose--type" className="contact--input text-md">
                    <option>Choose one..</option>
                    <option>Office</option>
                    <option>Construction building</option>
                    <option>Storage room</option>
                    <option>Glass</option>
                </select>
            </label>
            <label htmlFor="last-name" className="contact--label">
                <span className="text-md"> Building adress</span>
                <input
                    type="text"
                    className="contact--input text-md"
                    name="last-name"
                    id="last-name"
                    required
                />
            </label>
            <label htmlFor="last-name" className="contact--label">
                <span className="text-md"> PLZ & City </span>
                <input
                    type="text"
                    className="contact--input text-md"
                    name="last-name"
                    id="last-name"
                    required
                />
            </label>
            <label htmlFor="message" className="contact--label">
                <span className="text-md">Message</span>
                <textarea
                    className="contact--input text-md"
                    id="message"
                    rows="8"
                    placeholder="Type your message..."
                />
            </label>
            <div>
                <button className="btn btn-primary contact--form--btn">Submit</button>
            </div>
        </form>
    </section >
}