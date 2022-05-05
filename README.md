Box DAO<p>
This is a DAO that govern a Box contract:
- Box: store a number that can be adjusted, basically the contract to be governed by the DAO
- GovernanceToken: token that represents for the share of users
- GovernorContract: main logic, where propsers can propose change for the Box
- TimeLock: the contract that "own" Box directly, where approved proposals can be queued and executed

Inspired by the Patrick's repository https://github.com/PatrickAlphaC/dao-template