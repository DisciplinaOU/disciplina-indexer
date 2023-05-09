import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  Disciplina,
  NewHeader
} from "../generated/Disciplina/Disciplina"
import { PrivateBlockHeader } from "../generated/schema"

function saveBlockHeader(id: string, sender: Address, prevHash: Bytes, merkleRoot: Bytes, size: BigInt): void {
  const entity = new PrivateBlockHeader(id)

  entity.sender = sender;
  entity.prevHash = prevHash;
  entity.merkleRoot = merkleRoot;
  entity.size = size;

  entity.save();
}

export function handleNewHeader(event: NewHeader): void {
  saveBlockHeader(
    event.transaction.hash.toHex(),
    event.params.sender,
    event.params.prevHash,
    event.params.merkleRoot,
    event.params.size
  )
}
