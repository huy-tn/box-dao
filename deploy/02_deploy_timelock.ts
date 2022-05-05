import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { MIN_DELAY } from "../helper_hardhat_config";

const deployTimelock: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {
    console.log("Hello");
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("Deploying Time Lock...");
    const timeLock = await deploy("TimeLock", {
        from: deployer,
        args: [MIN_DELAY, [], []],
        log: true,
    });
};

export default deployTimelock;