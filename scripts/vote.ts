import { network, ethers } from "hardhat";
import * as fs from "fs";
import { moveBlocks } from "../utils/move_blocks";
import {
    developmentChains,
    proposalsFile,
    VOTING_PERIOD,
} from "../helper_hardhat_config";

const index = 0;

async function main(proposalIndex: number) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));
    const proposalId = proposals[network.config.chainId!][proposalIndex];

    const voteWay = 1; //1 = For
    const governor = await ethers.getContract("GovernorContract");
    const reason = "I consense";
    const voteTx = await governor.castVoteWithReason(
        proposalId,
        voteWay,
        reason
    );
    await voteTx.wait(1);

    if (developmentChains.includes(network.name)) {
        await moveBlocks(VOTING_PERIOD + 1);
    }

    console.log("Voted");
}

main(index)
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
