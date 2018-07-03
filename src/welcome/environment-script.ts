import * as introcs from "introcs";

for (let fn in introcs) {
    (window as any)[fn] = introcs[fn];
}