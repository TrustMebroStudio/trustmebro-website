
# **Trust Me Bro — Game Design**

---

## 1. Project Overview (Read This First)

This project is a **2–4 player online co-op chaos game built in Unity**.

### Core Fantasy

> *One body, multiple players controlling — mistakes create laughter.*

* Players share control of **a single body composed of 4 directional segments (Up/Down/Left/Right)**.
* Players control **Roles, not characters**.
* Roles are **randomly reassigned** during gameplay.
* This game is intentionally designed to achieve:

  * Failure is funny
  * Blame is ambiguous
  * "Good intentions" often cause disasters

---

### 1.1 Core Play Loop

* Sub-stages within a stage are **displayed differently based on room type**
* Generally structured to **choose between two rooms**
* Clear the stage by passing through sub-stages and completing the clear condition
* Once you move to a sub-stage, **you cannot return** (irreversible choice)

#### Room Types

* Normal Monster Room
* Elite Monster Room
* Dilemma Room
* Final Room
* Accident Room
* Recovery Room
* Event Room (to be added later)
* etc.

---

### 1.2 Dilemma Room

* Dilemmas **exist in the form of rooms**
* After entering, you can **choose whether to apply the dilemma item**

#### Dilemma Type Examples

* **Type 1: Asymmetric Trade-off Structure (1 vs 3, 2 vs 2)**
  * Example: 1 player's stats decrease & 3 players' stats increase
  * Example: 1 player's stats increase & 3 players' stats decrease
  * Later add **consumable item that can flip votes**
* **Type 2: Prisoner's Dilemma**
  * All agree: All players get weak positive effect
  * Only one disagrees: That player gets strong positive effect
  * Two or more disagree: All players get negative effect
* **Type 3: Full Penalty vs Full Reward**
  * Example: All players HP reduced by 50% in exchange for attack power increase

---

## 2. Core Gameplay Principles (Non-Negotiable)

### 2.1 Split-Control Body

* The main character is **a single connected body** with 4 directional segments.
* Each segment has:

  * Independent HP
  * Independent weapon slot
  * Active / Escaped / Dead state
* Players control **logical roles, not physical characters**.

> **RoleAssignment and SegmentState are the Single Source of Truth.**

---

### 2.2 Player Count & Control Distribution (Important)

The game supports **2, 3, and 4 players**.
**Control distribution varies by player count**, but the same system must handle all cases.

#### Control Rules

* **4-Player Mode**

  * Each player controls:

    * 1 movement direction
    * 1 attack

* **3-Player Mode**

  * One player:

    * Controls 2 movement directions
  * The other two players:

    * Each controls 1 movement direction
  * All players:

    * Control 1 attack

* **2-Player Mode**

  * Each player controls:

    * 2 movement directions
    * 1 attack

Notes:

* These are **Roles, not fixed keys**.
* Role distribution can change due to:

  * Random reassignment
  * Rotation mechanism
  * Escape / Death state

> **No system should assume a fixed player count.**
> **If behavior changes based on player count, that logic must be in RoleAssignment.**

---

### 2.3 Items That Create Dilemmas

Items are designed as **devices that induce chaos and conflict**.
Dropped items **belong only to the segment direction that picks them up**.

#### Item Types

* Drop Items

  1. **Augment Items**
     * Items displayed with stat icons
     * When acquired, augmentation is reflected in that segment's stats
  1. **Consumable Items**
     * Items that can be used by adding to in-game UI slots
     * Can hold up to 3 items in UI slots
     * Before acquisition, all displayed with the same `?` icon
     * Each item has an acquisition probability

     **Consumable Item Examples**

     * Movement Tyrant: Player who picks up the item controls all entity movement for 5 seconds
     * Resurrection Item: 2-second channeling when used (beam pulling in)
     * Health Recovery Item: Restores player's health when used
     * Slow: When the affected player attacks with weapon, all allies' movement speed decreases
     * Movement Confusion: Becomes confused and the player's assigned movement direction changes momentarily
     * Hot Potato
       * Can pass the bomb
       * Can pass using keys other than your own
         (Player assigned to A key can pass the bomb with W, D, S)

---

### 2.4 Escape & Death

* Each segment has independent HP.
* When HP reaches 0:

  * That segment **escapes from the body**
  * Stats reduced:

    * HP: 50% of previous max
    * Movement speed: 50%
    * Weapon: Reset to default
  * Escaped player:

    * Can move freely (WASD)
    * Cannot acquire items
    * Can still only attack in original direction
* If HP reaches 0 again → **Permanent death (cannot return)**

---

### 2.5 Rotation Mechanism (Important)

* When a specific direction segment dies:

  * Cannot move in that direction
* Adjacent players can rotate the body:

  * Example:

    * Dead: Up
    * Left inputs Up → **Clockwise rotation**
    * Right inputs Up → **Counter-clockwise rotation**
* Rotation effects:

  * Movement roles rotate
  * Attack directions rotate
  * Inactive (dead) slots also rotate

> Rotation is a **rule-based system**, not a simple transform change.

---
