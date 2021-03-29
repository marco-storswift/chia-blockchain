from typing import List, Optional

from src.types.blockchain_format.sized_bytes import bytes32
from src.util.block_cache import BlockCache
from src.full_node.block_store import BlockStore
from src.consensus.constants import ConsensusConstants
from src.util.ints import uint32
from src.types.blockchain_format.program import SerializedProgram

def load_generators(
    constants: ConsensusConstants,
    blocks: BlockCache,
    block_store: BlockStore,
    db_or_generator_cache,
    block_heights: List[uint32],
) -> Optional[List[SerializedProgram]]:
    """
    Transform a list of block heights into a list of Serialized generators
    This function will fail if any referenced generator fails to load
    If `load_generators` returns None, an error has occurred.
    Block heights must be valid transaction block heights.
    Block heights may be repeated or out of order.
    """
    from src.consensus.block_record import BlockRecord

    # Refuse to load a list longer than the consensus constants allow
    if len(block_heights) > constants.MAX_GENERATOR_REF_LIST_SIZE:
        logging.error(f"Refusing to load generator reference list of length {len(block_heights)}")
        return None
    generators = []
    for i in block_heights:
        try:
            block_record: BlockRecord = blocks.height_to_block_record(i)
            if b is None:
                logging.error(f"Generator Reference requested for missing block height {i}")
                return None
            elif block_record.is_transaction_block():
                full_block: Optional[FullBlock] = block_store.get_full_block(block_cache.height_to_hash(i))
                if full_block is None:
                    logging.error(f"Failed to fetch block for block height {i} from block store")
                    return None
                generators.append(full_block.transactions_generator)
            else:
                logging.error(f"Generator Reference requested for block height {i}, which is not a transaction block")
        except KeyError as e:
            logging.error(f"Generator Reference requested for missing block height {i}")
            logging.error(e)
            raise
    return generators


def create_block_program_args(
    transactions_generator_ref_list: List[uint32],
) -> SerializedProgram:
    return SerializedProgram.from_bytes(b"\x80")
