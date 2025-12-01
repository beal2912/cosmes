// @ts-check

/**
 * This script generates the src/protobufs directory from the proto files in the
 * repos specified in `REPOS`. It uses `buf` to generate TS files from the proto
 * files, and then generates an `index.ts` file to re-export the generated code.
 */

import { exec, spawnSync } from "child_process";
import degit from "degit";
import {
  copyFileSync,
  cpSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from "fs";
// @ts-ignore
import { globSync } from "glob";
import * as fs from 'fs';
import * as path from 'path';

import { capitalize, takeRight } from "lodash-es";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

/**
 * @typedef Repo
 * @type {object}
 * @property {string} repo - Git repo and branch to clone
 * @property {string} tag - Git repo and branch to clone
 * @property {string[]} paths - Paths to proto files relative to the repo root
 */

/**
 * TODO: Add more repos here when necessary.
 * @type {Repo[]}
 */
const REPOS = [
  {
    repo: "cosmos/cosmos-sdk",
    tag: "v0.50.10",
    paths: ["proto"],
  },
  {
    repo: "cosmos/ics23",
    tag: "master",
    paths: ["proto"],
  },
  {
    repo: "cosmos/ibc-go",
    tag: "v8.5.2",
    paths: ["proto"],
  },
  {
    repo: "CosmWasm/wasmd",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "osmosis-labs/osmosis",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "InjectiveLabs/sdk-go",
    tag: "master",
    paths: ["proto"],
  },
  {
    repo: "evmos/ethermint",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "evmos/evmos",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "dymensionxyz/osmosis",
    tag: "main-dym",
    paths: ["proto"],
  },
  {
    repo: "Kava-Labs/kava",
    tag: "master",
    paths: ["proto"],
  },
  {
    repo: "elys-network/elys",
    tag: "main",
    paths: ["proto"],
  },
/*   {
    repo: "onomyprotocol/market",
    tag: "main",
    paths: ["proto"],
  }, */
  {
    repo: "pryzm-finance/pryzmjs",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "sunriselayer/sunrise",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "neutron-org/neutron",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "milkyway-labs/milkyway",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "noble-assets/dollar",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "noble-assets/swap",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "CoreumFoundation/coreum",
    tag: "master",
    paths: ["proto"],
  },
  {
    repo: "atomone-hub/atomone",
    tag: "main",
    paths: ["proto"],
  },
  {
    repo: "NibiruChain/nibiru",
    tag: "main",
    paths: ["proto"],
  },
];
/**
 * TODO: Add more repos here when necessary.
 * @type {Repo[]}
 */
const THIRD = [];
const __dirname = dirname(fileURLToPath(import.meta.url));
const PROTOBUFS_DIR = join(__dirname, "..", "src", "protobufs");
const TMP_DIR = join(PROTOBUFS_DIR, ".tmp");
/** Generates a unique dirname from `repo` to use in `TMP_DIR`. */
const id = (/** @type {string} */ repo) => repo.replace(/[#/]/g, "-");

console.log("Initialising directories...");
{
  rmSync(PROTOBUFS_DIR, { recursive: true, force: true });
  rmSync(TMP_DIR, { recursive: true, force: true });
  mkdirSync(PROTOBUFS_DIR);
  mkdirSync(TMP_DIR);
}

console.log("Cloning required repos...");
{
  await Promise.all(
    REPOS.map(({ repo, tag }) => cloneSpecificCommit("git@github.com:"+repo+".git" , tag, join(TMP_DIR, id(repo+"#"+tag)))
  ))
}

console.log("Copying Third Party Proto...");
{
  //cpSync(join(TMP_DIR, id("cosmos/cosmos-sdk#v0.47.9"),"proto"),join(TMP_DIR,id("elys-network/elys#main"),""),{recursive: true})
  copyDirectoryRecursiveSync(join(TMP_DIR, id("cosmos/cosmos-sdk#v0.50.10"),"proto"), join(TMP_DIR,id("elys-network/elys#main"),"proto"))
  copyDirectoryRecursiveSync(join(TMP_DIR, id("cosmos/cosmos-sdk#v0.50.10"),"proto"), join(TMP_DIR,id("noble-assets/dollar#main"),"proto"))
  copyDirectoryRecursiveSync(join(TMP_DIR, id("cosmos/cosmos-sdk#v0.50.10"),"proto"), join(TMP_DIR,id("noble-assets/swap#main"),"proto"))
  copyDirectoryRecursiveSync(join(TMP_DIR, id("cosmos/cosmos-sdk#v0.50.10"),"proto"), join(TMP_DIR,id("CoreumFoundation/coreum#master"),"proto"))
  //copyDirectoryRecursiveSync(join(TMP_DIR, id("cosmos/cosmos-sdk#v0.50.10"),"proto"), join(TMP_DIR,id("onomyprotocol/market#main"),"proto"))
  rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/cosmos") , { recursive: true, force: true });
  rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/alliance") , { recursive: true, force: true });
  rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/gogoproto") , { recursive: true, force: true });
  rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/cosmos_proto") , { recursive: true, force: true });
  rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/google") , { recursive: true, force: true });
  rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/ibc") , { recursive: true, force: true });
  //rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/") , { recursive: true, force: true });
  //copyDirectoryRecursiveSync(join(TMP_DIR, id("cosmos/cosmos-sdk#v0.47.9"),"proto"), join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto"));
  copyDirectoryRecursiveSync(join(TMP_DIR, id("cosmos/ibc-go#v8.5.2"),"proto"), join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto"));
  rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/amino") , { recursive: true, force: true });
  rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/tendermint") , { recursive: true, force: true });
  //rmSync( join(TMP_DIR,id("pryzm-finance/pryzmjs#main"),"proto/cosmos/app") , { recursive: true, force: true });
  const dymensionDir = join(TMP_DIR,id("dymensionxyz/osmosis#main-dym"),"proto");
  const dymensionOsmosisDir = join(dymensionDir, "osmosis");
  rmSync( dymensionOsmosisDir , { recursive: true, force: true });
}

/* console.log("Flattening dymension protobufs...");
{
  // Move all dirs in protobufs/dymension/osmosis out into protobufs/dymension
  const dymensionDir = join(TMP_DIR,id("dymensionxyz/osmosis#main-dym"),"proto");
  const dymensionOsmosisDir = join(dymensionDir, "osmosis");
  const dymensionDymxyzDir = join(dymensionDir, "dymensionxyz/dymension");
  // Move all subdirs up one level
  readdirSync(dymensionOsmosisDir).forEach((file) => {
    const currentFile = join(dymensionOsmosisDir, file);
    const stats = statSync(currentFile);
    if (stats.isDirectory()) {
      copyDirectoryRecursiveSync(currentFile, join(dymensionDir, file));
    }
  });
  readdirSync(dymensionDymxyzDir).forEach((file) => {
    const currentFile = join(dymensionDymxyzDir, file);
    const stats = statSync(currentFile);
    if (stats.isDirectory()) {
      copyDirectoryRecursiveSync(currentFile, join(dymensionDir, file));
    }
  });


} */


console.log("Generating TS files from proto files...");
{
  for (const { repo, tag, paths } of REPOS) {
    
    for (const path of paths) {
      
        spawnSync(
          "pnpm",
          [
            "buf",
            "generate",
            join(TMP_DIR, id(repo+"#"+tag), path),
            "--output",
            PROTOBUFS_DIR
          ],
          {
            cwd: process.cwd(),
            stdio: "inherit",
          }
        );
        
      
    }
    console.log(`✔️ [${repo}]`);
  }
}

/*  console.log("Cleaning dymension protobufs...");
{
  const dymensionDir = join(PROTOBUFS_DIR, "dymension");
  const dymensionOsmosisDir = join(dymensionDir, "osmosis");

  rmSync( dymensionOsmosisDir , { recursive: true, force: true });
  rmSync( join(dymensionDir, "dymensionxyz") , { recursive: true, force: true });
} */
/*
 // Move all dirs in protobufs/dymension/osmosis out into protobufs/dymension
  const dymensionDir = join(PROTOBUFS_DIR, "dymension");
  const dymensionOsmosisDir = join(dymensionDir, "osmosis");
  const dymensionDymxyzDir = join(dymensionDir, "dymensionxyz/dymension");
  // Move all subdirs up one level
  readdirSync(dymensionOsmosisDir).forEach((file) => {
    const currentFile = join(dymensionOsmosisDir, file);
    const stats = statSync(currentFile);
    if (stats.isDirectory()) {
      renameSync(currentFile, join(dymensionDir, file));
    }
  });
  readdirSync(dymensionDymxyzDir).forEach((file) => {
    const currentFile = join(dymensionDymxyzDir, file);
    const stats = statSync(currentFile);
    if (stats.isDirectory()) {
      renameSync(currentFile, join(dymensionDir, file));
    }
  });

  // Remove all empty dirs
  readdirSync(dymensionDir).forEach((file) => {
    const currentFile = join(dymensionDir, file);
    const stats = statSync(currentFile);
    if (stats.isDirectory() && stats.size === 0) {
      rmSync(currentFile, { recursive: true, force: true });
    }
  });
} */

console.log("Generating src/index.ts file and renaming exports...");
{
  const LAST_SEGMENT_REGEX = /[^/]+$/;
  const EXPORTED_NAME_REGEX = /^export \w+ (\w+) /gm;
  let contents =
    "/** This file is generated by gen-protobufs.mjs. Do not edit. */\n\n";
  /**
   * Builds the `src/proto/index.ts` file to re-export generated code.
   * A prefix is added to the exported names to avoid name collisions.
   * The prefix is the names of the directories in `proto` leading up
   * to the directory of the exported code, concatenated in PascalCase.
   * For example, if the exported code is in `proto/foo/bar/goo.ts`, the
   * prefix will be `FooBar`.
   * @param {string} dir
   */
  function generateIndexExports(dir) {
    const files = globSync(join(dir, "*"));
    if (files.length === 0) {
      return;
    }
    const prefixName = dir
      .replace(PROTOBUFS_DIR + "/", "")
      .split("/")
      .map((name) =>
        // convert all names to PascalCase
        name.split(/[-_]/).map(capitalize).join("")
      )
      .join("");
    for (const file of files) {
      const fileName = file.match(LAST_SEGMENT_REGEX)?.[0];
      if (!fileName) {
        console.error("Could not find name for", file);
        continue;
      }
      if (!fileName.endsWith(".ts")) {
        continue;
      }
      const code = readFileSync(file, "utf8");
      contents += `export {\n`;
      for (const match of code.matchAll(EXPORTED_NAME_REGEX)) {
        const exportedName = match[1];
        contents += `  ${exportedName} as ${prefixName + exportedName},\n`;
      }
      const exportedFile = file
        .replace(PROTOBUFS_DIR + "/", "")
        .replace(".ts", ".js");
      contents += `} from "./${exportedFile}";\n`;
    }
    for (const file of files) {
      generateIndexExports(file);
    }
  }
  generateIndexExports(PROTOBUFS_DIR);
  writeFileSync(join(PROTOBUFS_DIR, "index.ts"), contents);
}

console.log("Rewriting Injective's legacy CosmWasm dependencies...");
{
  const path = join(
    PROTOBUFS_DIR,
    "injective",
    "wasmx",
    "v1",
    "proposal_pb.ts"
  );
  const contents = readFileSync(path, "utf8").replace(
    "proposal_pb.js",
    "proposal_legacy_pb.js"
  );
  writeFileSync(path, contents);
}

console.log("Cleaning up...");
{
  rmSync(TMP_DIR, { recursive: true, force: true });
}

console.log("Proto generation completed successfully!");


function copyDirectoryRecursiveSync(src, dest) {
  // Vérifier si le dossier de destination existe, sinon le créer
  if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
  }

  // Lire le contenu du dossier source
  const entries = fs.readdirSync(src, { withFileTypes: true });

  // Parcourir chaque entrée (fichier ou dossier)
  for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
          // Si c'est un dossier, appeler récursivement la fonction
          copyDirectoryRecursiveSync(srcPath, destPath);
      } else {
          // Si c'est un fichier, le copier
          fs.copyFileSync(srcPath, destPath);
      }
  }
}

async function cloneSpecificCommit(
  repoUrl,
  commitHash,
  targetDirectory
) {
  return new Promise((resolve, reject) => {
    
    const targetPath = join(targetDirectory)

    exec(
      `git clone ${repoUrl} ${targetPath} && cd ${targetPath} && git checkout ${commitHash}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error("Error:", stderr)
          reject(error)
        } 
        else{
          console.log(repoUrl)
          resolve(stdout)
        }
        
      }
    )
  })
}
