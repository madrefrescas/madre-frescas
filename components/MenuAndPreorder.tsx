"use client";

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
  }

  const orderSummary = [
    ...selectedItems.map((itemName) => {
      const item = availableItems.find((availableItem) => availableItem.name === itemName);
      return `${quantities[itemName] ?? 1} x ${itemName}${item ? ` - ${item.price}` : ""}`;
    }),
    ...(wantsCatering ? ["Catering or event"] : []),
  ];

  return (
    <>
      <section id="menu" className="section menu-section">
        <div className="section-heading">
          <p className="eyebrow">Menu + pricing</p>
          <h2>Austin sourdough, aguas frescas, horchata, and healthier sweets.</h2>
          <p>
            At Madre Frescas, we serve naturally leavened sourdough bread,
            refreshing aguas frescas, creamy horchata, and small-batch bakery
            treats inspired by Mexican flavor and Southern Kentucky baking.
            Every item is made with real ingredients, organic unbleached flour
            where possible, and lighter sweetener options for customers looking
            for fresh, better-for-you food in Austin.
          </p>
        </div>
        <div className="availability-note">
          <strong>Current menu:</strong> Classic Sourdough Loaf, Horchata, and
          Hibiscus Agua Fresca.
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
        <div>
          <p className="eyebrow">Preorder</p>
          <h2>Place a Madre Frescas preorder.</h2>
          <p>
            Choose any available items, add notes for quantities or pickup timing,
            and send the request. For catering, custom drink bars, or larger
            bakery orders, include your event date, guest count, and preferred
            pickup or delivery window.
          </p>
        </div>
        <form
          className="preorder-form"
          action="mailto:madrefrescas@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <fieldset className="order-options">
            <legend>What would you like to order?</legend>
            {availableItems.map((item) => (
              <div className="order-option" key={item.name}>
                <label>
                  <input
                    checked={selectedItems.includes(item.name)}
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
                <label className="quantity-field">
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
                  <small>Custom quote</small>
                </span>
              </label>
            </div>
          </fieldset>
          <input
            name="order_summary"
            type="hidden"
            value={orderSummary.join(", ")}
          />
          <label>
            Notes
            <textarea
              name="notes"
              placeholder="Tell us quantity, pickup timing, sourdough, horchata, hibiscus, catering details, or anything else you need..."
            />
          </label>
          <button className="button primary" type="submit">
            Send preorder request
          </button>
        </form>
      </section>
    </>
  );
}
