import { useEffect, useState } from "react";

import "../optc-db.github.io/common/data/units.js"; // window.units
import "../optc-db.github.io/common/data/evolutions.js"; // window.evolutions
import { thumbnails } from "./assets";

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
  const [filter, setFilter] = useState("");
  const [log, setLog] = useState(() => {
    const saved = localStorage.getItem("log");
    if (saved) return JSON.parse(saved);
    return Array(window.units.length).fill(null);
  });

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "10%",
          top: "5%",
          padding: "2px",
          outline: "1px solid white",
          borderRadius: "2px",
        }}
      >
        FILTER:{" "}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>*thumbnail</th>
            <th>**character log</th>
            <th>*evolution</th>
            {/* <th>recruitable</th> */}

            <th>Name</th>
            {/* <th>Type</th> */}
            {/* <th>Class</th> */}
            <th>Stars</th>
            {/* <th>Cost</th> */}
            {/* <th>Combo</th> */}
            {/* <th>Sockets</th> */}
            <th>maxLVL</th>
            {/* <th>EXPToMax</th> */}
            {/* <th>lvl1HP</th> */}
            {/* <th>lvl1ATK</th> */}
            {/* <th>lvl1RCV</th> */}
            {/* <th>MAXHP</th> */}
            {/* <th>MAXATK</th> */}
            {/* <th>MAXRCV</th> */}
            {/* <th>Growth Rate</th> */}
          </tr>
        </thead>
        <tbody>
          {window.units
            // .filter((unit) =>
            //   filter ? new RegExp(filter, "i").test(unit[0]) : true
            // )
            .map((_, idx: number) => {
              const id = idx + 1;
              const paddedId = id.toString().padStart(4, "0");

              const evo = window.evolutions[id]
                ? [window.evolutions[id].evolution].flat()
                : [];

              return (
                <tr
                  style={{
                    display:
                      filter && !new RegExp(filter, "i").test(_[0])
                        ? "none"
                        : "table-row",
                  }}
                >
                  <td>{paddedId}</td>
                  <td>
                    {id < 5000 ? <img src={thumbnails[paddedId]} /> : null}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={!!log[id]}
                      style={{ height: 75, width: 75 }}
                      onClick={() => {
                        const updated = [...log];
                        updated[id] = !log[id];
                        setLog(updated);
                      }}
                    />
                  </td>
                  <td style={{ display: "flex" }}>
                    {evo.map((_) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          opacity: log[_] ? 0.3 : 1,
                        }}
                      >
                        <img
                          src={thumbnails[_.toString().padStart(4, "0")]}
                          width={60}
                        />
                        <span>{_.toString().padStart(4, "0")}</span>
                      </div>
                    ))}
                  </td>
                  {_.filter(
                    (___, colId) =>
                      ![1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15].includes(
                        colId
                      )
                  ).map((__) => (
                    <td>{__}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;

// [ "Name",     "Type",               [ "Class1", "Class2" ],                                                          null, null,  null,    null,   null,     null,   null,    null,    null,  null,   null,   null,        null ],
// [ "Name",     "Type",               "Class1",                                                                        null, null,  null,    null,   null,     null,   null,    null,    null,  null,   null,   null,        null ],
// [ "Name",     "Type",               [ "Class1", "Class2" ],                                                         Stars, Cost, Combo, Sockets, maxLVL, EXPToMax, lvl1HP, lvl1ATK, lvl1RCV, MAXHP, MAXATK, MAXRCV, Growth Rate ],
// [ "Name",     [ "Type1", "Type2" ], [[ "1Class1", "1Class2" ], [ "2Class1", "2Class2" ], [ "3Class1", "3Class2" ]], Stars, Cost, Combo, Sockets, maxLVL, EXPToMax, lvl1HP, lvl1ATK, lvl1RCV, MAXHP, MAXATK, MAXRCV, Growth Rate ],
