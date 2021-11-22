module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log)
import Message (message)

main :: Effect Unit
main = do
    log "🍝"
    log message