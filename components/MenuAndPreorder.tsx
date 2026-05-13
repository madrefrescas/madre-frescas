"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type MenuItem = {
  category: string;
  name: string;
  tag: string;
  price: string;
  available: boolean;
  description: string;
};

export function MenuAndPreorder({ menu }: { menu: MenuItem[] }) {
  const availableItems = menu.filter((item) => item.available);
  const categories = Array.from(new Set(menu.map((item) => item.category)));
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [wantsCatering, setWantsCatering] = useState(false);
  const [formError, setFormError] = useState("");

  function addToPreorder(itemName: string) {
    setSelectedItems((currentItems) =>
      currentItems.includes(itemName)
        ? currentItems
        : [...currentItems, itemName],
    );
    setQuantities((currentQuantities) => ({
      ...currentQuantities,
      [itemName]: currentQuantities[itemName] ?? 1,
    }));
    document.getElementById("preorder")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function toggleItem(itemName: string) {
    setSelectedItems((currentItems) =>
      currentItems.includes(itemName)
        ? currentItems.filter((currentItem) => currentItem !== itemName)
        : [...currentItems, itemName],
    );
    setQuantities((currentQuantities) => ({
      ...currentQuantities,
      [itemName]: currentQuantities[itemName] ?? 1,
    }));
    setFormError("");
  }

  function updateQuantity(itemName: string, quantity: number) {
    const safeQuantity = Math.max(1, Math.min(99, quantity || 1));
    setQuantities((currentQuantities) => ({
      ...currentQuantities,
      [itemName]: safeQuantity,
    }));
    if (!selectedItems.includes(itemName)) {
      setSelectedItems((currentItems) => [...currentItems, itemName]);
    }
    setFormError("");
  }

  function adjustQuantity(itemName: string, amount: number) {
    updateQuantity(itemName, (quantities[itemName] ?? 1) + amount);
  }

  function removeItem(itemName: string) {
    setSelectedItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem !== itemName),
    );
  }

  function parsePrice(price: string) {
    return Number(price.replace(/[^0-9.]/g, "")) || 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (selectedItems.length === 0 && !wantsCatering) {
      event.preventDefault();
      setFormError("Choose at least one item or catering before sending.");
      document.getElementById("preorder")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const selectedOrderItems = selectedItems
    .map((itemName) => availableItems.find((item) => item.name === itemName))
    .filter((item): item is MenuItem => Boolean(item));

  const estimatedTotal = selectedOrderItems.reduce(
    (total, item) => total + parsePrice(item.price) * (quantities[item.name] ?? 1),
    0,
  );

  const orderSummary = [
    ...selectedOrderItems.map(
      (item) => `${quantities[item.name] ?? 1} x ${item.name} - ${item.price}`,
    ),
    ...(wantsCatering ? ["Catering or event"] : []),
  ];

  return (
    <>
      <section id="menu" className="section menu-section">
        <div className="section-heading">
          <p className="eyebrow">Menu + pricing</p>
          <h2>Austin sourdough, aguas frescas, coffee, and sweets.</h2>
          <p>
            At Madre Frescas, we serve naturally leavened sourdough bread,
            refreshing aguas frescas, premium coffee drinks, and small-batch
            bakery treats inspired by Mexican flavor and Southern Kentucky
            baking. Every item is made with real ingredients, organic
            unbleached flour where possible, and fresh flavor built for Austin
            pickup, events, and catering.
          </p>
        </div>
        <div className="availability-note">
          <strong>Current menu:</strong> Classic Sourdough Loaf plus current
          aguas frescas: Horchata and Hibiscus.
        </div>
        <div className="menu-categories">
          {categories.map((category) => (
            <div className="menu-category" key={category}>
              <h3>{category}</h3>
              <div className="menu-grid">
                {menu
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <article
                      className={
                        item.available
                          ? "menu-card is-available"
                          : "menu-card is-unavailable"
                      }
                      key={item.name}
                    >
                      <div className="card-topline">
                        <span>{item.tag}</span>
                        <strong>{item.price}</strong>
                      </div>
                      <div className="item-status">
                        {item.available ? "Available" : "Rotating item"}
                      </div>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      {item.available ? (
                        <button
                          className="menu-order-button"
                          type="button"
                          onClick={() => addToPreorder(item.name)}
                        >
                          {selectedItems.includes(item.name)
                            ? "Added to preorder"
                            : "Add to preorder"}
                        </button>
                      ) : (
                        <button className="menu-order-button disabled" disabled type="button">
                          Not available today
                        </button>
                      )}
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="preorder" className="section preorder-section">
        <div className="preorder-copy">
          <p className="eyebrow">Preorder</p>
          <h2>Place a Madre Frescas preorder.</h2>
          <p>
            Choose any available items, add notes for quantities or pickup timing,
            and send the request. For catering, custom drink bars, or larger
            bakery orders, include your event date, guest count, and preferred
            pickup or delivery window.
          </p>
          <p>
            Every preorder is reviewed by our team before confirmation so we can
            plan the bake, prepare fresh aguas frescas, and make sure your order
            is ready with the right timing. Madre Frescas is built for Austin
            pickups, weekend plans, office treats, family gatherings, and custom
            events that need fresh sourdough, naturally sweetened drinks, coffee,
            and small-batch sweets.
          </p>
          <p>
            Tell us what you are planning and we will help shape the order around
            it. A few loaves can cover a family brunch, while aguas frescas and
            coffee drinks work well for meetings, markets, showers, and backyard
            celebrations. Larger orders are planned with extra care so the bread,
            drinks, and sweets are fresh when you need them. For events, include
            your guest count and any flavor ideas so we can recommend the right
            mix.
          </p>
        </div>
        <form
          className="preorder-form"
          action="mailto:madrefrescas@gmail.com"
          method="post"
          encType="text/plain"
          onSubmit={handleSubmit}
        >
          <div className="preorder-menu-panel">
            <fieldset className="order-options">
              <legend>Current preorder menu</legend>
              <div className="order-options-scroll">
                {menu.map((item) => (
                  <div
                    className={
                      item.available
                        ? "order-option"
                        : "order-option is-order-unavailable"
                    }
                    key={item.name}
                  >
                    <label>
                      <input
                        checked={selectedItems.includes(item.name)}
                        disabled={!item.available}
                        name="items"
                        onChange={() => toggleItem(item.name)}
                        type="checkbox"
                        value={`${quantities[item.name] ?? 1} x ${item.name} - ${item.price}`}
                      />
                      <span>
                        <strong>{item.name}</strong>
                        <small>{item.price}</small>
                      </span>
                    </label>
                    {item.available ? (
                      <div
                        className="quantity-stepper"
                        aria-label={`${item.name} quantity controls`}
                      >
                        <button
                          aria-label={`Decrease ${item.name} quantity`}
                          onClick={() => adjustQuantity(item.name, -1)}
                          type="button"
                        >
                          -
                        </button>
                        <label>
                          Qty
                          <input
                            aria-label={`${item.name} quantity`}
                            min="1"
                            max="99"
                            name={`${item.name}_quantity`}
                            onChange={(event) =>
                              updateQuantity(item.name, Number(event.target.value))
                            }
                            inputMode="numeric"
                            pattern="[0-9]*"
                            type="text"
                            value={quantities[item.name] ?? 1}
                          />
                        </label>
                        <button
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() => adjustQuantity(item.name, 1)}
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <span className="order-unavailable-note">
                        Not available today
                      </span>
                    )}
                  </div>
                ))}
                <div className="order-option">
                  <label>
                    <input
                      checked={wantsCatering}
                      name="items"
                      onChange={() => setWantsCatering((current) => !current)}
                      type="checkbox"
                      value="Catering or event"
                    />
                    <span>
                      <strong>Catering or event</strong>
                      <small>Quote</small>
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="order-summary-card" aria-live="polite">
            <div className="order-summary-heading">
              <strong>Selected items</strong>
              <span>
                {estimatedTotal > 0
                  ? `Estimated total: $${estimatedTotal}`
                  : "Select items"}
              </span>
            </div>
            {orderSummary.length > 0 ? (
              <ul>
                {selectedOrderItems.map((item) => (
                  <li key={item.name}>
                    <span>
                      {quantities[item.name] ?? 1} x {item.name}
                    </span>
                    <button onClick={() => removeItem(item.name)} type="button">
                      Remove
                    </button>
                  </li>
                ))}
                {wantsCatering && (
                  <li>
                    <span>Catering or event</span>
                    <button onClick={() => setWantsCatering(false)} type="button">
                      Remove
                    </button>
                  </li>
                )}
              </ul>
            ) : (
              <p>Select items above to build your preorder.</p>
            )}
          </div>
          <div className="form-grid">
            <label>
              Name
              <input name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Phone
              <input name="phone" placeholder="Best number to text" type="tel" />
            </label>
            <label>
              Pickup or event date
              <input name="pickup_or_event_date" type="date" />
            </label>
          </div>
          <input
            name="order_summary"
            type="hidden"
            value={orderSummary.join(", ")}
          />
          <input
            name="estimated_total"
            type="hidden"
            value={estimatedTotal > 0 ? `$${estimatedTotal}` : ""}
          />
          <label>
            Pickup details or notes
            <textarea
              name="notes"
              placeholder="Tell us pickup timing, catering details, event address, drink preferences, or anything else you need..."
            />
          </label>
          {formError && <p className="form-error">{formError}</p>}
          <button className="button primary" type="submit">
            Send preorder request
          </button>
        </form>
      </section>
    </>
  );
}
