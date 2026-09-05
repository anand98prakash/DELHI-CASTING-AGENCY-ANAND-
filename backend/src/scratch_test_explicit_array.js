import crypto from "node:crypto";
function testExplicitArrayConstruction() {
    const key = "RZp63o";
    const txnid = "txnid_dca_1788344389034_l5594";
    const amount = "1999.00";
    const productinfo = "ARTIST_PREMIUM";
    const firstname = "Anand";
    const email = "ansdfand27@gmail.com";
    const udf1 = "b235cbf8-cdc2-466a-8e3b-f91fad47ad20";
    const udf2 = "";
    const udf3 = "";
    const udf4 = "";
    const udf5 = "";
    const salt = "[REDACTED_SALT]";
    const hashFields = [
        key,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        udf1,
        udf2,
        udf3,
        udf4,
        udf5,
        "", // udf6
        "", // udf7
        "", // udf8
        "", // udf9
        "" // udf10
    ];
    const hashSequence = hashFields.join("|") + "|" + salt;
    const pipeCount = (hashSequence.match(/\|/g) || []).length;
    const splitFields = hashSequence.split("|");
    console.log("=== EXPLICIT ARRAY HASH SEQUENCE ===");
    console.log("Sequence (Salt Redacted):", hashSequence);
    console.log("Total Pipe Delimiters:", pipeCount);
    console.log("Total Array Tokens:", splitFields.length);
    console.log("\n=== TOKEN POSITION MATRIX ===");
    splitFields.forEach((val, idx) => {
        const label = idx === 0 ? "key" :
            idx === 1 ? "txnid" :
                idx === 2 ? "amount" :
                    idx === 3 ? "productinfo" :
                        idx === 4 ? "firstname" :
                            idx === 5 ? "email" :
                                idx >= 6 && idx <= 15 ? `udf${idx - 5}` : "SALT";
        console.log(`[Token ${idx + 1}] ${label.padEnd(12)} = ${val === "" ? "<EMPTY>" : val}`);
    });
}
testExplicitArrayConstruction();
//# sourceMappingURL=scratch_test_explicit_array.js.map