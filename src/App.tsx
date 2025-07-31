import "../optc-db.github.io/common/data/units.js"; // window.units
import "../optc-db.github.io/common/data/evolutions.js"; // window.evolutions

// import "../optc-db.github.io/common/data/abilities.js";
// import "../optc-db.github.io/common/data/aliases.js";
// import "../optc-db.github.io/common/data/altspecials.js";
// import "../optc-db.github.io/common/data/availableClasses.js";
// import "../optc-db.github.io/common/data/availableTags.js";
// import "../optc-db.github.io/common/data/capspecials.js";
// import "../optc-db.github.io/common/data/captains.js";
// import "../optc-db.github.io/common/data/cooldowns.js";
// import "../optc-db.github.io/common/data/defenses.js";
// import "../optc-db.github.io/common/data/details.js";
// import "../optc-db.github.io/common/data/drops.js";
// import "../optc-db.github.io/common/data/effects.js";
// import "../optc-db.github.io/common/data/events.js";
// import "../optc-db.github.io/common/data/families.js";
// import "../optc-db.github.io/common/data/festival.js";
// import "../optc-db.github.io/common/data/flags.js";
// import "../optc-db.github.io/common/data/gw.js";
// import "../optc-db.github.io/common/data/matchers.js";
// import "../optc-db.github.io/common/data/rumble.json";
// import "../optc-db.github.io/common/data/rumble.schema.json";
// import "../optc-db.github.io/common/data/sailors.js";
// import "../optc-db.github.io/common/data/ships.js";
// import "../optc-db.github.io/common/data/specials.js";
// import "../optc-db.github.io/common/data/tags.js";
// import "../optc-db.github.io/common/data/tandems.js";
// import "../optc-db.github.io/common/data/version.js";
// import "../optc-db.github.io/common/data/zombies.js";
// format-rumble-json.sh
// json.html

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>**thumbnail</th>
          <th>Name</th>
          <th>Type</th>
          <th>Class</th>
          <th>Stars</th>
          <th>Cost</th>
          <th>Combo</th>
          <th>Sockets</th>
          <th>maxLVL</th>
          <th>EXPToMax</th>
          <th>lvl1HP</th>
          <th>lvl1ATK</th>
          <th>lvl1RCV</th>
          <th>MAXHP</th>
          <th>MAXATK</th>
          <th>MAXRCV</th>
          <th>Growth Rate</th>
        </tr>
      </thead>
      <tbody>
        {window.units.map((_, idx: number) => {
          // get from dir & see what's extra
          const id = idx + 1;
          const paddedId = id.toString().padStart(4, "0");
          const [THOU, HUND, ...rest] = paddedId;

          return (
            <tr>
              <td>{paddedId}</td>
              <td>
                <img
                  src={`../optc-db.github.io/api/images/thumbnail/glo/${THOU}/${HUND}00/${paddedId}.png`}
                />
              </td>
              {_.map((__) => (
                <td>{__}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
