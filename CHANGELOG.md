# Changelog

---

### Version: _0.17.0_

### Date: _2026-06-01_

### Changes:

**Files:**

- **Added:** `README.md`, `LICENSE-MIT`, `LICENSE-CC-BY-NC-SA-4.0`.

**Mods:**

- **Removed:** `ae2alchemistryaddon`, `alchemistry`, `alchemylib`, `bonsaitrees3`, `brickfurnace`, `chemlib`, `kubejsalchem`, `legendarytooltips`.

- **Added:** `enderbotanypots`, `globalgamerules`.

- **Updated:** `justdirethings` `1.0.28` -> `1.0.29`.

**Recipes:**

- **Removed:**
    - `bonsaitrees3:sapling`: `#botania:mystical_flowers`, `minecraft:crimson_fungus`, `minecraft:oak_sapling`, `minecraft:sugar_cane`.

    - `bonsaitrees3:soil`: `botania:vivid_grass`, `minecraft:crimson_nylium`, `minecraft:dirt`, `minecraft:grass_block`, `minecraft:netherrack`, `minecraft:red_sand`, `minecraft:sand`.

    - `brickfurnace:smelting`: `ceramicbucket:ceramic_bucket`, `minecraft:brick`, `minecraft:glass`, `minecraft:smooth_stone`, `minecraft:stone`.

    - `minecraft:crafting_shaped`: `brickfurnace:brick_furnace`.

- **Added:**
    - `botanypots:crop`: `#botania:double_flowers`, `#botania:mystical_flowers`, `minecraft:crimson_fungus`, `minecraft:oak_sapling`, `minecraft:sugar_cane`.

    - `botanypots:soil`: `botania:vivid_grass`, `minecraft:crimson_nylium`, `minecraft:dirt`, `minecraft:grass_block`, `minecraft:netherrack`, `minecraft:sand`.

    - `create:milling`:
        - `botania:lime_petal` -> `minecraft:lime_dye`.
        - `botania:green_petal` -> `minecraft:green_dye`.
        - `botania:black_petal` -> `minecraft:black_dye`.
        - `botania:red_petal` -> `minecraft:red_dye`.
        - `botania:orange_petal` -> `minecraft:orange_dye`.

    - `createmetallurgy:casting_in_table`: `gtceu:copper (144mb)` + `gtceu:ingot_casting_mold` -> `minecraft:copper_ingot`.

    - `createmetallurgy:melting`: `minecraft:iron_ingot` -> `gtceu:iron (144mb)`.

    - `minecraft:campfire_cooking`:
        - `minecraft:cobblestone` -> `minecraft:stone`.
        - `minecraft:stone` -> `minecraft:smooth_stone`.
        - `gtceu:glass_dust` -> `minecraft:glass`.
        - `minecraft:potato` -> `minecraft:baked_potato`.

    - `minecraft:crafting_shaped`: `minecraft:flower_pot`, `rechiseled:chisel`.

    - `minecraft:crafting_shapeless`: `botanypots:terracotta_hopper_botany_pot`.

    - `minecraft:smelting`:
        - `gtceu:compressed_clay` -> `minecraft:brick`.
        - `minecraft:clay` -> `minecraft:terracotta`.
        - `minecraft:potato` -> `minecraft:baked_potato`.
        - `minecraft:cobblestone` -> `minecraft:stone`.
        - `minecraft:stone` -> `minecraft:smooth_stone`.

    - `minecraft:smoking`: `minecraft:potato` -> `minecraft:baked_potato`.

- **Changed:**
    - `create:milling`: processing time of `minecraft:raw_iron`, `minecraft:iron_ingot`, `minecraft:sugar_cane`, `minecraft:raw_copper`, `#minecraft:planks`, `minecraft:wheat`, `minecraft:copper_ingot`, `minecraft:andesite`, `minecraft:nether_wart_block`, `minecraft:stone`, `minecraft:cobblestone`, `minecraft:gravel`: `100t` -> `default`.

    - `minecraft:blasting`: cooking time of `minecraft:copper_ingot`, `gtceu:andesite_alloy_ingot`: `150t` -> `100t`.

    - `minecraft:campfire_cooking`: cooking time and xp of `minecraft:brick`, `ceramicbucket:ceramic_bucket`: `400t` `0.1xp` -> `300t` `0xp`.

    - `minecraft:crafting_shaped`:
        - `woodenhopper:wooden_hopper` + `minecraft:flower_pot` -> `botanypots:terracotta_hopper_botany_pot`.

        - output of `compactcrafting:base`, `compactcrafting:projector_dish`: `4x` -> `1x`.

    - `minecraft:smelting`: output of `minecraft:coal`: `1x` -> `2x`.

**Quests:**

- **Removed:**
    - `Brass Age` chapter: `botania:blaze_block`, `create:powdered_obsidian`, `minecraft:obsidian`.

    - `Stone Age` chapter: `bonsaitrees3:bonsaipot`, `brickfurnace:brick_furnace`, `minecraft:chest`, `minecraft:clay`, `minecraft:terracotta`.

- **Added:**
    - `Botania Age I` chapter: `botanypots:terracotta_hopper_botany_pot`, `minecraft:chest`, `minecraft:clay`, `minecraft:flower_pot`, `minecraft:terracotta`, `woodenhopper:wooden_hopper`.

    - `Botania Age II` chapter: `botania:blaze_block`, `create:powdered_obsidian`, `minecraft:obsidian`.

    - `Stone Age` chapter: `gtceu:brick_wooden_form`, `gtceu:compressed_clay`, `gtceu:empty_wooden_form`, `minecraft:brick`, `minecraft:oak_planks`, `minecraft:oak_slab`, `minecraft:stripped_oak_log`.

- **Changed:**
    - `Brass Age` chapter:
        - `create:chromatic_compound` quest: removed prerequisite `minecraft:obsidian`.

        - `minecraft:ancient_debris` quest: added prerequisite `rainbowcompound:strange_colored_ingot`.

        - `gtceu:obsidian_plate` quest: added prerequisite `create:powdered_obsidian`.

        - `minecraft:amethyst_shard` quest: replaced prerequisite `botania:blaze_block` -> `minecraft:dragon_breath`.

    - `Create Age` chapter: `botania:green_mystical_flower` quest: added prerequisite `create:millstone`.

    - `Productive Bees` chapter: `productivebees:configurable_honeycomb (iron)` quest: removed prerequisite `minecraft:beehive`.

---

### Version: _0.16.0_

### Date: _2026-05-29_

### Changes:

**Mods:**

- **Removed:** `logisticsnetwork`, `summoningrituals`.

- **Updated:** `justdirethings` `1.0.27` -> `1.0.28`.

**Recipes:**

- **Removed:**
    - `create:milling`: `minecraft:cobblestone`, `minecraft:gravel`, `minecraft:andesite`, `minecraft:bone`.

    - `create:splashing`: `#minecraft:all_small_flowers`.

    - `createaddition:item_application`: `createmetallurgy:kiln_brick`.

    - `create_mechanical_extruder:extruding`: all recipes.

    - `immersiveengineering:crafting`: `immersiveengineering:alloybrick`, `immersiveengineering:sawdust`.

    - `minecraft:crafting_shaped`: `minecraft:blast_furnace`, `#forge:double_plates`, `gtceu:iron_rod`, `createmetallurgy:foundry_basin`.

    - `melter:melting`: `#minecraft:leaves` -> `minecraft:water`.

    - `summoningrituals:altar`: all recipes.

- **Added:**
    - `create:milling`:
        - `minecraft:andesite` -> `gtceu:andesite_dust`.
        - `minecraft:copper_ingot` -> `gtceu:copper_dust`.
        - `minecraft:wheat` -> `gtceu:wheat_dust`.

    - `create:cutting`: `gtceu:iron_rod` -> `2x gtceu:iron_bolt`.

    - `createaddition:rolling`: `minecraft:iron_ingot` -> `gtceu:iron_rod`.

    - `createmetallurgy:casting_in_table`:
        - `gtceu:copper (144mb)` + `gtceu:plate_casting_mold` -> `gtceu:copper_plate`.
        - `gtceu:iron (144mb)` + `gtceu:plate_casting_mold` -> `gtceu:iron_plate`.

    - `createmetallurgy:casting_in_basin`: `gtceu:copper (288mb)` + `minecraft:sandstone` -> `immersiveengineering:alloybrick`.

    - `create_mechanical_extruder:extruding`:
        - `minecraft:water` + `minecraft:lava` -> `minecraft:stone`.
        - `strainers:eroding_water_fluid` + `minecraft:lava` -> `minecraft:andesite`.
        - `strainers:purified_water_fluid` + `minecraft:lava` -> `minecraft:diorite`.
        - `strainers:eroding_water_fluid` + `strainers:purified_water_fluid` -> `minecraft:granite`.

    - `farmersdelight:cutting`:
        - `gtceu:andesite_alloy_block` + `#forge:tools/paxels` -> `create:basin`.
        - `create:basin` + `#forge:tools/paxels` -> `create:chute`.

    - `immersiveengineering:alloy`:
        - `gtceu:copper_dust` + `gtceu:andesite_dust` -> `gtceu:andesite_alloy_dust`.
        - `4x gtceu:andesite_alloy_ingot` + `#forge:stripped_logs` -> `create:andesite_casing`.

    - `lychee:block_interacting`:
        - `botania:orange_petal_block` + `minecraft:stone` -> `gtceu:copper_ore`.
        - `botania:white_petal_block` + `minecraft:stone` -> `gtceu:iron_ore`.
        - `botania:black_petal_block` + `minecraft:stone` -> `gtceu:coal_ore`.
        - `botania:black_petal_block` + `gtceu:iron_ore` -> `gtceu:graphite_ore`.
        - `botania:white_petal_block` + `gtceu:coal_ore` -> `gtceu:graphite_ore`.
        - `botania:red_petal_block` + `minecraft:stone` -> `gtceu:redstone_ore`.
        - `botania:blue_petal_block` + `gtceu:iron_ore` -> `gtceu:lapis_ore`.
        - `botania:yellow_petal_block` + `minecraft:stone` -> `gtceu:sulfur_ore`.
        - `botania:light_gray_petal_block` + `gtceu:iron_ore` -> `gtceu:saltpeter_ore`.
        - `createmetallurgy:refractory_mortar` + `create:basin` -> `createmetallurgy:foundry_basin`.
        - `thermal_extra:soul_sand_dust` + `minecraft:stone` -> `mysticalagriculture:soulstone`.
        - `botania:cyan_petal_block` + `gtceu:iron_ore` -> `mysticalagriculture:prosperity_ore`.
        - `botania:brown_petal_block` + `mysticalagriculture:soulstone` -> `mysticalagriculture:soulium_ore`.

    - `melter:melting`:
        - `gtceu:andesite_alloy_block` -> `gtceu:andesite_alloy (1296mb)`.
        - `minecraft:copper_block` -> `gtceu:copper (1296mb)`.

    - `minecraft:blasting`:
        - `gtceu:andesite_alloy_dust` -> `gtceu:andesite_alloy_ingot`.
        - `minecraft:raw_copper` -> `minecraft:copper_ingot`.

    - `minecraft:crafting_shaped`: `minecraft:blast_furnace`.

- **Changed:**
    - `create:milling`: processing time of `minecraft:raw_iron`, `minecraft:iron_ingot`, `minecraft:sugar_cane`, `minecraft:raw_copper`, `#minecraft:planks`, `minecraft:wheat`, `minecraft:copper_ingot`, `minecraft:andesite`, `minecraft:nether_wart_block`, `minecraft:stone`, `minecraft:cobblestone`, `minecraft:gravel`, `thermal_extra:soul_sand_dust`: `default` -> `100t`.

    - `createmetallurgy:casting_in_basin`, `createmetallurgy:casting_in_table`: casting time of all recipes: `200t` -> `150t`.

    - `vintage:centrifugation`: processing time of all recipes: `200t` -> `150t`.

    - `object_tags`: added `gtceu:wood_plate` to `#forge:bricks`.

    - `replace_objects`: `#forge:dusts/wood` -> `gtceu:wood_dust`.

**Quests:**

- **Removed:**
    - `Botania Age I` chapter: `botania:livingwood_planks`, `botania:livingwood_planks_slab`, `botania:mana_powder`, `botania:stripped_livingwood_log`, `minecraft:red_dye`, `minecraft:red_wool`, `minecraft:sugar`, `minecraft:sugar_cane`, `minecraft:white_wool`, `summoningrituals:altar`.

    - `Create Age` chapter: `minecraft:iron_block`.

- **Added:** `Iron Age` chapter: `minecraft:sugar_cane`.

- **Changed:**
    - `Create Age` chapter: `vintage:centrifuge` quest: added `create:basin`: `0x` -> `4x`.

    - `Botania Age I`, `Create Age`, `Copper Age`, `Stone Age` chapters: adjusted dependency chains.

---

### Version: _0.15.0_

### Date: _2026-05-27_

### Changes:

**Mods:**

- **Removed:** `createdieselgenerators`, `expandedae`, `industrialforegoingsouls`, `spiceoflifeonion`, `survivalfiresticks`, `thermalcultivation`, `tomssimplestorage`, `tomsstoragestaroptimized`, `unlitcampfire`, `youkaisfeasts`.

- **Added:** `ae2alchemistryaddon`, `alchemistry`, `alchemylib`, `caelus`, `chemlib`, `createsifter`, `createhalitosis`, `framedblocks`, `justdirethings`, `kubejsalchem`, `oworld2create`, `pccard`, `rainbowcompound`, `rftoolsbase`, `soulpliedenergistics`, `summoningrituals`, `ultiminerewind`, `xnet`.

- **Updated:**
    - `betteradvancements`: `0.4.2.59` -> `0.4.2.60`.
    - `botania`: `1.20.1-452` -> `1.20.1-453`.
    - `cognition`: `2.4.11` -> `2.4.12`.
    - `create_connected`: `1.1.13` -> `1.2.0`.
    - `creativecore`: `2.12.37` -> `2.12.38`.
    - `culturaldelights`: `0.16.5` -> `0.16.7`.
    - `extralib`: `3.0.3` -> `3.0.4`.
    - `gtceuterminals`: `4.6.1` -> `5.6.2`.
    - `itemphysic`: `1.8.12` -> `1.8.13`.
    - `justenoughcharacters`: `4.6.3` -> `4.6.4`.
    - `logisticsnetwork`: `1.3.2` -> `1.3.3`.
    - `modernfix`: `5.27.25` -> `5.27.40`.
    - `sophisticatedbackpacks`: `3.24.39.1743` -> `3.24.43.1789`.
    - `sophisticatedcore`: `1.3.35.1851` -> `1.3.38.1893`.
    - `sophisticatedstorage`: `1.4.44.1725` -> `1.4.48.1754`.
    - `structurify`: `2.0.24` -> `2.0.25`.
    - `toomanyrecipeviewers`: `0.7.3` -> `0.8.1`.
    - `xaeroplus`: `2.31.3` -> `2.31.5`.

**Recipes:**

- **Removed:**
    - `ae2cs:pulverizer`: `minecraft:cobblestone`, `minecraft:gravel`, `minecraft:sand`.

    - `create:splashing`: `#forge:crushed_ores`.

    - `minecraft:crafting_shaped`: `#forge:bolts`, `#forge:double_plates`, `#forge:flawless_gems`, `#forge:gems`, `#forge:plates`, `#minecraft:dyes`, `create:encased_chain_drive`, `create:mechanical_mixer`, `immersiveengineering:gunpowder`, `immersiveengineering:lead_white`, `mysticalagriculture:infusion_altar`, `mysticalagriculture:infusion_pedestal`, `thermal:gunpowder_4`.

    - `minecraft:crafting_shapeless`: `hostilenetworks:end_prediction`, `hostilenetworks:nether_prediction`, `hostilenetworks:overworld_prediction`.

    - `mysticalagriculture:infusion`: `#mysticalagriculture:seeds`.

- **Added:**
    - `bonsaitrees3:sapling`: `minecraft:crimson_fungus`, `minecraft:sugar_cane`.

    - `bonsaitrees3:soil`: `minecraft:netherrack`, `minecraft:red_sand`, `minecraft:sand`.

    - `create:compacting`: `2x gtceu:wood_dust` -> `gtceu:wood_plate`.

    - `create:milling`: `#minecraft:planks` -> `6x gtceu:wood_dust`.

    - `create:sequenced_assembly`: `gtceu:brass_ingot` -> `rainbowcompound:strange_colored_ingot`.

    - `createmetallurgy:casting_in_basin`:
        - `minecraft:lava (500mb)` + `minecraft:blackstone` -> `minecraft:magma_block`.
        - `minecraft:water (1000mb)` + `minecraft:magma_block` -> `minecraft:netherrack`.

    - `createmetallurgy:casting_in_table`: `manaliquidizer:mana_fluid (144mb)` + `gtceu:iron_dust` -> `gtceu:manasteel_dust`.

    - `farmersdelight:cutting`: `minecraft:clay_ball` + `gtceu:brick_wooden_form` -> `gtceu:compressed_clay`.

    - `lychee:block_interacting`:
        - `create_hc:gear_small` + `create:shaft` -> `create:cogwheel`.
        - `create_hc:gear_large` + `create:shaft` -> `create:large_cogwheel`.
        - `create_hc:saw_blade` + `create:gearbox` -> `create:mechanical_saw`.
        - `create:gearbox` + `#forge:stone` -> `create:millstone`.
        - `create:copper_valve_handle` + `create:fluid_tank` -> `create:spout`.
        - `#forge:glass_panes` + `create:copper_casing` -> `create:fluid_tank`.
        - `create_hc:gear_small` + `create:andesite_casing` -> `create:gearbox`.
        - `gtceu:copper_plate` + `create:chute` -> `create:fluid_pipe`.
        - `create_hc:gear_small` + `create:fluid_pipe` -> `create:mechanical_pump`.
        - `gtceu:andesite_alloy_nugget` + `create_hc:shaft` -> `create:shaft`.
        - `create_hc:press_head` + `create:gearbox` -> `create:mechanical_press`.
        - `create:turntable` + `create:andesite_casing` -> `create:depot`.
        - `gtceu:andesite_alloy_ingot` + `#minecraft:wooden_slabs` -> `create:turntable`.
        - `create:propeller` + `create:gearshift` -> `create:encased_fan`.
        - `create_hc:gear_small` + `create:clutch` -> `create:gearshift`.
        - `minecraft:redstone_torch` + `create:gearbox` -> `create:clutch`.
        - `create:whisk` + `create:gearbox` -> `create:mechanical_mixer`.
        - `thermal_extra:soul_sand_dust` + `minecraft:stone` -> `mysticalagriculture:soulstone`.

    - `minecraft:crafting_shaped`: `ftbmaterials:niter_block`, `ftbmaterials:sulfur_block`, `gtceu:andesite_alloy_ingot`, `industrialforegoing:pitiful_generator`, `minecraft:clay`, `minecraft:copper_ingot`, `mysticalagriculture:soulium_gemstone`, `pipez:fluid_pipe`, `pipez:wrench`, `summoningrituals:altar`.

    - `minecraft:crafting_shapeless`: `ftbmaterials:niter`, `ftbmaterials:sulfur`, `minecraft:black_wool`, `minecraft:flint`, `minecraft:green_wool`, `minecraft:orange_wool`.

    - `minecraft:smelting`:
        - `gtceu:manasteel_dust` -> `botania:manasteel_ingot`.
        - `gtceu:raw_lapis` -> `6x minecraft:lapis_lazuli`.
        - `gtceu:raw_redstone` -> `5x minecraft:redstone`.

    - `minecraft:shapeless`:
        - `gtceu:andesite_alloy_ingot` -> `9x gtceu:andesite_alloy_nugget`.
        - `minecraft:copper_ingot` -> `9x gtceu:copper_nugget`.

    - `summoningrituals:altar`: `gtceu:coal_ore`, `gtceu:copper_ore`, `gtceu:graphite_ore`, `gtceu:iron_ore`, `gtceu:lapis_ore`, `gtceu:redstone_ore`, `gtceu:saltpeter_ore`, `gtceu:sulfur_ore`, `mysticalagriculture:prosperity_ore`, `mysticalagriculture:soulium_ore`.

    - `vintage:centrifugation`: `minecraft:mycelium` -> `#minecraft:mushrooms`.

    - `vintage:curving`: `gtceu:empty_mold` + `gtceu:wood_plate` -> `gtceu:plate_casting_mold`.

    - `replace_objects`:
        - `create:cinder_flour` -> `gtceu:netherrack_dust`.
        - `#forge:gems/niter` -> `ftbmaterials:niter`.
        - `#forge:gems/sulfur` -> `ftbmaterials:sulfur`.
        - `#forge:dusts/saltpeter` -> `gtceu:saltpeter_dust`.
        - `#forge:dusts/sulfur` -> `gtceu:sulfur_dust`.

- **Changed:**
    - `createmetallurgy:casting_in_table`: fluid of `gtceu:andesite_alloy_dust`: `gtceu:copper`: `216mb` -> `144mb`.

    - `createmetallurgy:shaped`: ingredient of `createmetallurgy:refractory_brick`: `minecraft:nether_brick` -> `minecraft:brick`.

    - `farmersdelight:cutting`: input of `#minecraft:all_logs_and_woods` -> `#kubejs:all_logs_and_woods`.

    - `minecraft:crafting_shaped`: replaced input of:
        - `#gtceu:tools/crafting_knives` -> `silentgear:knife`.
        - `#gtceu:tools/crafting_saws` -> `silentgear:saw`.
        - `#gtceu:tools/crafting_hammers` -> `silentgear:hammer`.

    - `minecraft:smelting`: output of `gtceu:raw_redstone`: `minecraft:redstone`: `1x` -> `5x`.

    - `vintage:centrifugation`: processing time of:
        - `minecraft:netherrack`: `200t` -> `150t`.
        - `minecraft:nether_bricks`: `600t` -> `400t`.

**Quests:**

- **Removed:**
    - `Pneumatic Age`, `Logistics Network`, `Tom's Storage` chapters.

    - `Botania Age I` chapter: `botania:grass_seeds`, `botania:vivid_seeds`, `minecraft:green_dye`, `mysticalagriculture:infusion_altar`.

    - `Create Age` chapter: `botania:red_petal_block`, `gtceu:raw_redstone`, `gtceu:redstone_ore`.

    - `Logistics Network` chapter: `logisticsnetworks:wrench`.

    - `Tom's Storage` chapter: `toms_storage:ts.inventory_connector`.

- **Added:**
    - `Botania Age III`, `Xnet`, `Bronze Steam Age` chapters.

    - `Botania Age I` chapter: `summoningrituals:altar`, `botania:livingwood_planks`, `botania:livingwood_planks_slab`, `botania:stripped_livingwood_log`.

    - `Copper Age` chapter: `botania:red_petal_block`, `gtceu:raw_redstone`, `gtceu:redstone_ore`, `pipez:fluid_pipe`, `pipez:wrench`.

    - `Create Age` chapter: `gtceu:andesite_alloy_nugget`, `gtceu:charcoal_dust`.

    - `Iron Age` chapter: `botania:blue_mystical_flower`, `botania:brown_petal_block`, `botania:cyan_petal_block`, `botania:cyan_mystical_flower`, `botania:green_mystical_flower`, `botania:light_gray_petal_block`, `botania:yellow_mystical_flower`, `cagedmobs:hopping_mob_cage`, `create:mechanical_saw`, `create_hc:saw_blade`, `ftbmaterials:niter`, `ftbmaterials:niter_block`, `ftbmaterials:sulfur`, `ftbmaterials:sulfur_block`, `gtceu:iron_plate`, `gtceu:plate_casting_mold`, `gtceu:raw_saltpeter`, `gtceu:raw_sulfur`, `gtceu:saltpeter_ore`, `gtceu:small_iron_gear`, `gtceu:small_iron_spring`, `gtceu:sulfur_ore`, `gtceu:wood_dust`, `gtceu:wood_plate`, `mysticalagriculture:soulstone`, `thermal_extra:soul_sand_dust`.

    - `Stone Age` chapter: `industrialforegoing:pitiful_generator`, `minecraft:chest`, `minecraft:clay`, `minecraft:oak_planks`, `minecraft:oak_slab`, `minecraft:stripped_oak_log`.

- **Changed:** `Botania Age I`, `Create Age`, `Copper Age`, `Stone Age`, `Iron Age` chapters: adjusted dependency chains.

---

### Version: _0.14.0_

### Date: _2026-05-19_

### Changes:

**Mods:**

- **Removed:** `brewingandchewin`, `ceramicshears`, `compatdelight`, `compressedcreativity`, `delightfulcreators`, `farmersrespite`, `inventorysorter`, `removereloadingscreen`, `biggertrees`, `watercondenser`, `woodenshears`.

- **Added:** `angelring`, `antiportals`, `apotheosis`, `apotheosisadditions`, `apothicattributes`, `baguettelib`, `chargers`, `cognition`, `colorfulhearts`, `corpse`, `corpse_curios`, `createjetpack`, `customportalapi`, `customportalbuilder`, `dysonsphereproject`, `extrahostilenetworks`, `ftbessentials`, `ftbmaterials`, `fluxnetworks`, `freecam`, `gtceufo`, `hostilenetworks`, `inventorysorterconf`, `ironjetpacks`, `justenoughtime`, `logisticsnetwork`, `modnamtooltip`, `observable`, `rechiseled`, `rechiseled_ae2`, `rechiseled_create`, `silentgear`, `silentlib`, `sfm`, `ubedelight`, `whenwasthatagain`, `apotheosis`, `appliedflux`.

- **Updated:**
    - `ae2crystalscience`: `1.1.4.514` -> `1.1.4.515`.
    - `betteradvancements`: `0.4.2.25` -> `0.4.2.59`.
    - `chloride`: `1.7.5` -> `1.7.7`.
    - `expandedae`: `1.3.3` -> `1.4.1.b`.
    - `extralib`: `3.0.2` -> `3.0.3`.
    - `farmersdelight`: `1.3.1` -> `1.3.2`.
    - `ftbquests`: `2001.4.21` -> `2001.4.22`.
    - `frightsdelight`: `1.4.6` -> `1.4.8`.
    - `gtceutrueageofsteam`: `0.2.3` -> `0.3.0`.
    - `kubejsthermal`: `2001.1.10-build.2` -> `2001.1.10-build.5`.
    - `lychee`: `5.2.0` -> `5.2.1`.
    - `masterfulmanufacturing`: `0.1.33.3` -> `0.1.33.4`.
    - `modernfix`: `5.27.15` -> `5.27.25`.
    - `mysticalag`: `7.0.23` -> `7.0.24`.
    - `emi`: `1.1.22` -> `1.1.24`.
    - `openpartiesandclaims`: `0.26.2` -> `0.26.3`.
    - `certainquestingadditions`: `1.1.6` -> `1.1.7`.
    - `sophisticatedbackpacks`: `3.24.36.1713` -> `3.24.39.1743`.
    - `sophisticatedcore`: `1.3.30.1809` -> `1.3.35.1851`.
    - `sophisticatedstorage`: `1.4.42.1701` -> `1.4.44.1725`.
    - `structurify`: `2.0.22` -> `2.0.24`.
    - `xaerominimap`: `25.3.10` -> `25.3.13`.
    - `xaeroworldmap`: `1.40.11` -> `1.40.16`.
    - `xaeroplus`: `2.31.1` -> `2.31.3`.

**Recipes:**

- **Removed:**
    - `create:milling`: `createmetallurgy:crushed_raw_gold`, `createmetallurgy:crushed_raw_zinc`.

    - `minecraft:crafting_shaped`: `create_netherless:coal_rod`, `createmetallurgy:faucet`, `farmersdelight:flint_knife`, `farmersdelight:iron_knife`, `gtceu:flint_axe`, `immersiveengineering:hammercrushing_aluminum`, `immersiveengineering:hammercrushing_cobalt`, `immersiveengineering:hammercrushing_copper`, `immersiveengineering:hammercrushing_gold`, `immersiveengineering:hammercrushing_iron`, `immersiveengineering:hammercrushing_lead`, `immersiveengineering:hammercrushing_nickel`, `immersiveengineering:hammercrushing_platinum`, `immersiveengineering:hammercrushing_silver`, `immersiveengineering:hammercrushing_tin`, `immersiveengineering:hammercrushing_tungsten`, `immersiveengineering:hammercrushing_uranium`, `immersiveengineering:lead_red`, `immersiveengineering:torch`.

    - `minecraft:smelting`: `thermal:redstone_from_spores_smelting`.

- **Added:**
    - `create:splashing`:
        - `gtceu:crushed_iron_ore` -> `gtceu:purified_iron_ore` + `gtceu:stone_dust` + `gtceu:tiny_nickel_dust (16%)`.
        - `gtceu:crushed_copper_ore` -> `gtceu:purified_copper_ore` + `gtceu:stone_dust` + `gtceu:tiny_cobalt_dust (16%)`.

    - `createmetallurgy:casting_in_basin`:
        - `gtceu:copper (1296mb)` -> `minecraft:copper_block`.
        - `gtceu:iron (1296mb)` -> `minecraft:iron_block`.

    - `createmetallurgy:casting_in_table`: `minecraft:water (125mb)` + `gtceu:paper_dust` -> `minecraft:paper`.

    - `farmersdelight:cutting`: `create:gearbox` + `create:whisk` -> `create:mechanical_mixer`.

    - `lychee:item_inside`: `minecraft:bone_meal` + `strainers:purified_water_block` -> `botania:fertilizer`.

    - `melter:melting`:
        - `#minecraft:leaves` -> `minecraft:water (125mb)`.
        - `#forge:cobblestone` -> `minecraft:lava (100mb)`.

    - `minecraft:crafting_shaped`: `mysticalagriculture:infusion_altar`, `mysticalagriculture:infusion_pedestal`, `gtceu:wood_gear`, `youkaisfeasts:wood_basin`, `botanypots:terracotta_botany_pot`, `botanypots:terracotta_hopper_botany_pot`, `create:propeller`.

    - `minecraft:crafting_shapeless`: `9x minecraft:coal`, `minecraft:red_wool`.

    - `minecraft:smelting`:
        - `minecraft:raw_copper` -> `minecraft:copper_ingot`.
        - `#forge:rods/wooden` -> `minecraft:torch`.
        - `gtceu:raw_redstone` -> `minecraft:redstone`.
        - `gtceu:raw_graphite` -> `ftbmaterials:graphite_ingot`.

    - `mysticalagriculture:infusion`: `gtceu:coal_ore`, `gtceu:copper_ore`, `gtceu:graphite_ore`, `gtceu:iron_ore`, `gtceu:lapis_ore`, `gtceu:redstone_ore`, `gtceu:saltpeter_ore`, `gtceu:sulfur_ore`.

    - `thermal:centrifuge`: `productivebees:configurable_honeycomb (copper)` -> `minecraft:raw_copper` + `productivebees:wax` + `create:honey (250mb)`.

    - `vintage:centrifugation`: `productivebees:configurable_honeycomb (copper)` -> `minecraft:raw_copper` + `productivebees:wax` + `create:honey (250mb)`.

    - `vintage:curving`: `gtceu:empty_mold` + `minecraft:brick` -> `gtceu:ingot_casting_mold`.

    - `vintage:polishing`: `minecraft:coal_block` -> `create_netherless:coal_rod`.

    - `youkaisfeasts:simple_basin`: `#kubejs:organic_matters` -> `minecraft:water (50mb)`.

- **Changed:**
    - `create:compacting`: `gtceu:empty_mold`: input of `minecraft:iron_ingot` -> `ftbmaterials:graphite_ingot`.

    - `create:milling`: `minecraft:raw_iron`: output of `gtceu:crushed_iron_ore` -> `2x gtceu:crushed_iron_ore` + `gtceu:stone_dust`.

    - `createmetallurgy:casting_in_table`: `gtceu:andesite_alloy_dust`, `minecraft:iron_ingot`: ingredient of `createmetallurgy:graphite_ingot_mold` -> `gtceu:ingot_casting_mold`.

    - `farmersdelight:cutting`: tool of `#minecraft:pickaxes` -> `#forge:tools/pickaxes`.

    - `minecraft:crafting_shaped`: `minecraft:stick`: ingredient of `kubejs:flint_saw` -> `silentgear:saw`.

    - `vintage:centrifugation`: `gtceu:purified_iron_ore`: added output `gtceu:tiny_tin_dust`.

    - `replace_objects`:
        - `#forge:dusts/lead` -> `gtceu:lead_dust`.
        - `#forge:dusts/nickel` -> `gtceu:nickel_dust`.
        - `#forge:dusts/silver` -> `gtceu:silver_dust`.
        - `#forge:dusts/tin` -> `gtceu:tin_dust`.
        - `#forge:dusts/uranium` -> `gtceu:uranium_dust`.

**Quests:**

- **Removed:**
    - `Copper Age` chapter: `melter:melter`.

    - `Create Age` chapter: `botania:mana_pool`, `create:mechanical_saw`, `create_hc:saw_blade`, `createmetallurgy:graphite`, `createmetallurgy:graphite_blank_mold`, `createmetallurgy:graphite_ingot_mold`, `minecraft:sugar_cane`.

- **Added:**
    - `AE2`, `Logistics Network`, `Productive Bees`, `SFM` chapters.

    - `Botania Age I` chapter: `botania:mana_powder`, `minecraft:lever`, `minecraft:red_dye`, `minecraft:red_wool`, `minecraft:sugar`, `minecraft:sugar_cane`, `minecraft:white_wool`, `mysticalagriculture:infusion_altar`.

    - `Copper Age` chapter: `minecraft:copper_block`.

    - `Create Age` chapter: `botania:red_petal_block`, `create:clutch`, `create:cogwheel`, `create:encased_fan`, `create:gearshift`, `create:propeller`, `ftbmaterials:graphite_ingot`, `gtceu:empty_mold`, `gtceu:ingot_casting_mold`, `gtceu:paper_dust`, `gtceu:raw_redstone`, `gtceu:redstone_ore`, `minecraft:iron_block`, `minecraft:redstone`, `minecraft:redstone_torch`, `minecraft:torch`, `vintage:curving_press`.

    - `Iron Age` chapter: `botania:blue_petal_block`, `botania:manasteel_block`, `botania:manasteel_ingot`, `botania:mana_tablet`, `botania:mycelium_seeds`, `botania:rune_air`, `botania:rune_earth`, `botania:rune_fire`, `botania:rune_mana`, `botania:rune_water`, `botania:terra_plate`, `cagedmobs:mob_cage`, `create:chute`, `create:fluid_pipe`, `create:mechanical_pump`, `ftbmaterials:niter_block`, `ftbmaterials:sulfur_block`, `gtceu:copper_plate`, `gtceu:iron_bolt`, `gtceu:iron_ring`, `gtceu:iron_rod`, `gtceu:iron_screw`, `gtceu:lapis_ore`, `gtceu:manasteel_dust`, `gtceu:raw_lapis`, `manaliquidizer:mana_fluid_bucket`, `manaliquidizer:mana_liquidizer`, `minecraft:chain`, `minecraft:chicken_spawn_egg`, `minecraft:coal_block`, `minecraft:creeper_spawn_egg`, `minecraft:crimson_fungus`, `minecraft:diamond`, `minecraft:feather`, `minecraft:gunpowder`, `minecraft:hay_block`, `minecraft:iron_bars`, `minecraft:iron_block`, `minecraft:lapis_block`, `minecraft:lapis_lazuli`, `minecraft:mycelium`, `minecraft:nether_wart`, `minecraft:nether_wart_block`, `minecraft:orange_wool`, `minecraft:red_mushroom`, `minecraft:white_carpet`, `mysticalagriculture:prosperity_gemstone`, `mysticalagriculture:prosperity_ore`, `mysticalagriculture:prosperity_shard`, `mysticalagriculture:soulium_dust`, `mysticalagriculture:soulium_gemstone`, `mysticalagriculture:soulium_ore`, `vintage:vacuum_chamber`.

    - `Stone Age` chapter: `botanypots:terracotta_botany_pot`, `minecraft:terracotta`, `strainers:mulch`.

---

### Version: _0.13.0_

### Date: _2026-05-02_

### Changes:

**Mods:**

- **Removed:** `alltheleaks`, `botanicadditions`, `createhenry`, `entityculling`, `hammerlib`, `immediatelyn`, `immersiveindustry`, `inventoryessentials`, `neverp`, `nono`, `simpleprocessingmachines`.

- **Added:** `alternatingcurrent`, `biggertrees`, `brewinandchewin`, `buildingpadgets`, `cofhcore`, `compactmachines`, `compatdelight`, `connectivity`, `createaddition`, `createhandcrafting`, `cucumber`, `cullleaves`, `culturaldelights`, `cupboard`, `delightfulcreators`, `dimban`, `endsdelight`, `enderstorage`, `entangled`, `fallingleaves`, `frightsdelight`, `industrialforegoing`, `industrialforegoingextraupgrades`, `industrialforegoingsouls`, `jeimultiblocks`, `kubejsindustrialforegoing`, `kubejsmysticalag`, `kubejsthermal`, `kubejsthermalaugments`, `lightspeedre`, `mifa`, `midnightlib`, `modelgapfix`, `mysticalag`, `mysticalagadditions`, `mysticalagtieredcrystals`, `mystianapiary`, `mysticalextendedtier`, `mynethersdelight`, `nohandbreak`, `productivebees`, `saturn`, `smoothboot`, `thermalcultivation`, `thermalendergy`, `thermalexpansion`, `thermalextra`, `thermalfoundation`, `thermalinnovation`, `thermalintegration`, `thermallocomotion`, `watercondenser`.

- **Updated:**
    - `ae2overclocked`: `1.2.3-fix2` -> `1.2.3-fix3`.
    - `botanicalmachineryextra`: `1.2.9.5` -> `1.2.9.6`.
    - `botania`: `1.20.1-451` -> `1.20.1-452`.
    - `collective`: `1.20.1-8.20` -> `1.20.1-8.22`.
    - `compactcrafting`: `4.0.5` -> `4.0.6`.
    - `crafttweaks`: `18.2.8` -> `18.2.9`.
    - `creativcore`: `2.12.36` -> `2.12.37`.
    - `cyclopscore`: `1.22.0` -> `1.22.1`.
    - `extendedae`: `1.4.14` -> `1.4.15`.
    - `extralib`: `2.1.4` -> `3.0.2`.
    - `extraquests`: `1.6.2` -> `1.7.0`.
    - `farmersdelight`: `1.2.11a` -> `1.3.1`.
    - `frightsdelight`: `1.3.4` -> `1.4.6`.
    - `itemphysic`: `1.8.11` -> `1.8.12`.
    - `kubejs`: `2001.6.5-build.16` -> `2001.6.5-build.26`.
    - `masterfulmanufacturing`: `0.1.33.2` -> `0.1.33.3`.
    - `modernfix`: `5.27.12` -> `5.27.15`.
    - `openpartiesandclaims`: `0.26.1` -> `0.26.2`.
    - `sophisticatedbackpacks`: `3.24.35.1675` -> `3.24.36.1713`.
    - `sophisticatedcore`: `1.3.22.1715` -> `1.3.30.1809`.
    - `sophisticatedstorage`: `1.4.41.1679` -> `1.4.42.1701`.
    - `titanium`: `3.8.32` -> `3.8.34`.
    - `toomanyrecipeviewers`: `0.7.2` -> `0.7.3`.

**Recipes:**

- **Removed:**
    - `botania:runic_altar`: `gtceu:copper_ore`.

    - `minecraft:blasting`: `#forge:crushed_ores`, `#forge:dusts`, `#forge:impure_dusts`, `#forge:pure_dusts`, `#forge:purified_ores`, `#forge:refined_ores`.

    - `minecraft:crafting_shaped`: `gtceu:gem_to_dust_charcoal_gem`, `gtceu:gem_to_dust_coal_exquisite_gem`, `gtceu:gem_to_dust_coal_flawless_gem`, `gtceu:gem_to_dust_coke_exquisite_gem`, `gtceu:gem_to_dust_coke_flawless_gem`, `gtceu:gem_to_dust_coke_gem`, `gtceu:mortar_grind_antimony`, `gtceu:mortar_grind_brass`, `gtceu:mortar_grind_bronze`, `gtceu:mortar_grind_invar`, `gtceu:mortar_grind_iron`, `gtceu:mortar_grind_lead`, `gtceu:mortar_grind_nickel`, `gtceu:mortar_grind_silver`, `gtceu:mortar_grind_steel`, `gtceu:mortar_grind_tin`, `gtceu:mortar_grind_wrought_iron`, `#forge:plates`, `#forge:impure_dusts`, `#forge:pure_dusts`.

    - `minecraft:crafting_shapeless`: `#forge:exquisite_gems`, `#forge:flawless_gems`, `#forge:impure_dusts`, `#forge:pure_dusts`, `#forge:refined_ores`.

    - `minecraft:smelting`: `#forge:crushed_ores`, `#forge:dusts`, `#forge:impure_dusts`, `#forge:pure_dusts`, `#forge:purified_ores`, `#forge:refined_ores`.

    - `minecraft:stonecutting`: `createmetallurgy:graphite_blank_mold`.

- **Added:**
    - `botania:runic_altar`:
        - `4x botania:orange_petal` + `4x botania:orange_petal_block` -> `gtceu:copper_ore`.
        - `4x botania:white_petal` + `4x botania:white_petal_block` -> `gtceu:iron_ore`.
        - `4x botania:black_petal` + `4x botania:black_petal_block` -> `gtceu:coal_ore`.
        - `2x botania:white_petal` + `2x botania:black_petal` + `2x botania:white_petal_block` + `2x botania:black_petal_block` -> `gtceu:graphite_ore`.
        - `3x gtceu:andesite_alloy_ingot` + `4x botania:livingrock` + `botania:diluted_pool` -> `botania:mana_pool`.

    - `brewinandchewin:fermenting`:
        - `minecraft:bone_meal` + `strainers:purified_water_fluid (250mb)` -> `botania:fertilizer`.
        - `minecraft:dirt` + `minecraft:water (500mb)` -> `minecraft:mud`.

    - `create:compacting`:
        - `2x gtceu:andesite_alloy_ingot` -> `vintage:andesite_sheet`.
        - `2x minecraft:iron_ingot` -> `gtceu:iron_plate`.
        - `2x createmetallurgy:graphite` -> `createmetallurgy:graphite_blank_mold`.

    - `create:cutting`: `createmetallurgy:graphite_blank_mold` -> `createmetallurgy:graphite_ingot_mold` + `createmetallurgy:graphite_plate_mold`.

    - `create:filling`: `gtceu:crushed_iron_ore` + `minecraft:water (250mb)` -> `gtceu:purified_iron_ore`.

    - `create:haunting`: `botania:grass_seeds` -> `botania:mycelium_seeds`.

    - `create:milling`:
        - `minecraft:raw_iron` -> `gtceu:crushed_iron_ore`.
        - `minecraft:iron_ingot` -> `gtceu:iron_dust`.
        - `minecraft:sugar_cane` -> `gtceu:paper_dust`.
        - `minecraft:soul_sand` -> `thermal_extra:soul_sand_dust`.

    - `create:mixing`: `minecraft:iron_ingot` + `2x thermal_extra:soul_sand_dust` + `minecraft:copper_ingot` -> `2x thermal_extra:soul_infused_ingot`.

    - `createaddition:rolling`: `gtceu:andesite_alloy_ingot` -> `vintage:andesite_rod`.

    - `createmetallurgy:casting_in_basin`: `gtceu:andesite_alloy (1296mb)` -> `gtceu:andesite_alloy_block`.

    - `createmetallurgy:casting_in_table`: `gtceu:andesite_alloy (144mb)` + `createmetallurgy:graphite_ingot_mold` -> `gtceu:andesite_alloy_ingot`.

    - `createmetallurgy:melting`:
        - `minecraft:copper_ingot` -> `gtceu:copper (144mb)`.
        - `gtceu:andesite_alloy_dust` -> `gtceu:andesite_alloy (144mb)`.
        - `gtceu:refined_iron_ore` -> `gtceu:iron (216mb)`.

    - `farmersdelight:cutting`:
        - `gtceu:andesite_alloy_block` + `#minecraft:pickaxes` -> `create:basin`.
        - `create:basin` + `#minecraft:pickaxes` -> `create:chute`.
        - `create:shaft` + `create_hc:gear_small` -> `create:cogwheel`.
        - `create:shaft` + `create_hc:gear_large` -> `create:large_cogwheel`.

    - `minecraft:crafting_shaped`: `brewinandchewin:keg`, `create:copper_valve_handle`, `create:empty_blaze_burner`, `create:whisk`, `createaddition:rolling_mill`, `create_hc:press_head`, `create_hc:saw_blade`, `minecraft:paper`, `minecraft:white_wool`, `vintage:centrifuge`, `vintage:spring_coiling_machine`, `vintage:spring_coiling_machine_wheel`.

    - `minecraft:smelting`:
        - `gtceu:raw_graphite` -> `createmetallurgy:graphite`.
        - `gtceu:raw_coal` -> `minecraft:coal`.

    - `vintage:centrifugation`: `gtceu:purified_iron_ore` -> `gtceu:refined_iron_ore` + `gtceu:stone_dust`.

    - `replace_objects`:
        - `farmersdelight:flint_knife` -> `gtceu:flint_knife`.
        - `farmersdelight:iron_knife` -> `gtceu:iron_knife`.
        - `minecraft:copper_ore` -> `gtceu:copper_ore`.
        - `minecraft:coal_ore` -> `gtceu:coal_ore`.

- **Changed:**
    - `minecraft:crafting_shaped`: `createmetallurgy:refractory_brick`: ingredient of `minecraft:brick` -> `minecraft:nether_brick`.

    - `melter:melting`: processing time of all recipes: `200t` -> `400t`.

**Quests:**

- **Removed:**
    - `Copper Age` chapter: `minecraft:dried_kelp`, `minecraft:kelp`.

    - `Origin Age` chapter: `simpleprocessingmachines:atmospheric_condenser`, `simpleprocessingmachines:crystallizing_station`, `simpleprocessingmachines:organic_composter`.

    - `Tom's Storage` chapter: `toms_storage:ts.storage_terminal`.

- **Added:**
    - `Iron Age`, `Brass Age`, `Pneumatic Age`, `Modpack Introduction` chapters.

    - `Botania Age II` chapter: `botania:alfheim_portal`, `botania:dragonstone`, `botania:elementium_ingot`, `botania:gaia_ingot`, `botania:gaia_pylon`, `botania:glimmering_dreamwood`, `botania:glimmering_livingwood`, `botania:life_essence`, `botania:pixie_dust`, `botania:terrasteel_ingot`, `botania:terrasteel_nugget`, `create:brass_casing`, `create:encased_fan`, `createmetallurgy:foundry_mixer`, `extrabotany:orichalcos_ingot`, `gtceu:brass_dust`, `gtceu:brass_ingot`, `gtceu:purified_sphalerite_ore`, `gtceu:raw_sphalerite`, `gtceu:refined_sphalerite_ore`, `gtceu:sphalerite_ore`, `gtceu:zinc_dust`, `gtceu:zinc_ingot`, `minecraft:glowstone_dust`, `minecraft:prismarine_crystals`, `mythicbotany:alfsteel_ingot`, `mythicbotany:alfsteel_nugget`, `mythicbotany:alfsteel_pylon`, `mythicbotany:mana_infuser`.

    - `Copper Age` chapter: `create:copper_valve_handle`, `create:fluid_tank`.

    - `Create Age` chapter: `botania:black_petal_block`, `botania:mana_pool`, `botania:white_petal_block`, `create:basin`, `create:blaze_burner`, `create:cogwheel`, `create:depot`, `create:empty_blaze_burner`, `create:gearbox`, `create:mechanical_mixer`, `create:mechanical_press`, `create:mechanical_saw`, `create:millstone`, `create:shaft`, `create:turntable`, `create:whisk`, `create_hc:gear_small`, `create_hc:press_head`, `create_hc:saw_blade`, `create_hc:shaft`, `create_netherless:coal_rod`, `createaddition:rolling_mill`, `createmetallurgy:foundry_basin`, `createmetallurgy:foundry_lid`, `createmetallurgy:graphite`, `createmetallurgy:graphite_blank_mold`, `createmetallurgy:graphite_ingot_mold`, `createmetallurgy:refractory_mortar`, `gtceu:andesite_alloy_block`, `gtceu:coal_ore`, `gtceu:crushed_iron_ore`, `gtceu:graphite_ore`, `gtceu:iron_ore`, `gtceu:paper_dust`, `gtceu:purified_iron_ore`, `gtceu:raw_coal`, `gtceu:raw_graphite`, `gtceu:raw_iron`, `gtceu:refined_iron_ore`, `minecraft:blaze_rod`, `minecraft:coal`, `minecraft:coal_block`, `minecraft:paper`, `minecraft:sugar_cane`, `vintage:andesite_rod`, `vintage:andesite_sheet`, `vintage:andesite_spring`, `vintage:belt_grinder`, `vintage:centrifuge`, `vintage:grinder_belt`, `vintage:spring_coiling_machine`, `vintage:spring_coiling_machine_wheel`.

    - `Origin Age` chapter: `brewinandchewin:keg`, `watercondenser:watercondenser`.

    - `Tom's Storage` chapter: `toms_storage:ts.inventory_connector`.

---

### Version: _0.12.0_

### Date: _2026-04-25_

### Changes:

- Removed items: `kubejs:twig`, `kubejs:flint_shard`.
- Added new items: `kubejs:mossy_twig`, `kubejs:mossy_flint_shard`.
- Adjusted some recipes.
- Adjusted quest chapter: `Stone Age`.
- Adjusted quest chapter: `Botania Age I`.
- Adjusted quest chapter: `Copper Age`.

---

### Version: _0.11.0_

### Date: _2026-04-17_

### Changes:

- Adjusted some recipes.
- Adjusted quest chapter: `Stone Age`.
- Adjusted quest chapter: `Botania Age I`.

---

### Version: _0.10.0_

### Date: _2026-04-16_

### Changes:

- Adjusted Skyblock world type default map preset.
- Adjusted some recipes.
- Adjusted quest chapter: `Stone Age`.
- Added quest chapter: `Botania Age I`.

---

### Version: _0.9.0_

### Date: _2026-04-15_

### Changes:

- Adjusted Skyblock world type default map preset.
- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.
- Added quest chapter: `Botania Age I`.
- Adjusted Chinese translations.

---

### Version: _0.8.0_

### Date: _2026-04-13_

### Changes:

- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.

---

### Version: _0.7.0_

### Date: _2026-04-13_

### Changes:

- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.

---

### Version: _0.6.0_

### Date: _2026-04-12_

### Changes:

- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.
- Added quest chapter: `Heat Age`.

---

### Version: _0.5.0_

### Date: _2026-04-11_

### Changes:

- Adjusted item icons: `kubejs:dirt_pile`, `kubejs:humus_pile`, `kubejs:flint_shard`, `kubejs:twig`, and `kubejs:flint_saw`.
- Adjusted multiblock structure: `kubejs:furnace`.
- Adjusted some recipes.
- Adjusted quest chapter: `Origin Age`.
- Adjusted quest chapter: `Stone Age`.

---

### Version: _0.4.0_

### Date: _2026-04-10_

### Changes:

- Removed items: `kubejs:organic_matter_pile`.
- Adjusted some recipes.
- Adjusted the quest chapter: `Origin Age`.
- Completed the quest chapter: `Stone Age`.

---

### Version: _0.3.0_

### Date: _2026-04-10_

### Changes:

- Removed items: `kubejs:dirt_dust`, and `kubejs:dirt_stick`.
- Added new items: `kubejs:dirt_pile`, `kubejs:humus_pile`, `kubejs:organic_matter_pile`, `kubejs:twig`, and `kubejs:flint_saw`.
- Adjusted some recipes.
- Completed the quest chapter: `Origin Age`.

---

### Version: _0.2.0_

### Date: _2026-04-09_

### Changes:

- Added new items: `kubejs:dirt_dust`, `kubejs:dirt_stick`, and `kubejs:flint_shard`.
- Added new recipes for `kubejs:dirt_dust`, `kubejs:dirt_stick`, `kubejs:flint_shard`, `minecraft:flint`, `minecraft:dead_bush`, `minecraft:oak_sapling`, and `botania:living_root`.
- Added new quests.

---

### Version: _0.1.0_

### Date: _2026-04-08_

### Changes:

- Adjusted `config/sidebar_buttons.json`.
- Created a new Skyblock world preset in the `config/skyblockbuilder/` directory.
- Changed the default world type to the Skyblock preset.

---

### Version: _0.0.0_

### Date: _2026-04-08_

### Changes:

- Initial project setup.
