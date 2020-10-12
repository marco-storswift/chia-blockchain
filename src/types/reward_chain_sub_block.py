from dataclasses import dataclass
from blspy import G2Element

from src.types.sized_bytes import bytes32
from src.util.ints import uint32, uint128
from src.util.streamable import Streamable, streamable
from src.types.proof_of_time import ProofOfTime, ProofOfTimeOutput
from src.types.proof_of_space import ProofOfSpace


@dataclass(frozen=True)
@streamable
class RewardChainSubBlock(Streamable):
    weight: uint128
    sub_block_height: uint32
    total_iters: uint128
    challenge_slot_hash: bytes32
    is_challenge_block: bool
    proof_of_space: ProofOfSpace
    icp_prev_icp: bytes32
    infusion_challenge_point: ProofOfTimeOutput
    infusion_challenge_point_proof: ProofOfTime
    infusion_challenge_point_sig: G2Element


@dataclass(frozen=True)
@streamable
class RewardChainInfusionPoint(Streamable):
    ip_prev_icp: bytes32
    infusion_point: ProofOfTimeOutput
    infusion_point_proof: ProofOfTime
